package pl.tom.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.tom.authservice.email.EmailSender;
import pl.tom.authservice.model.passwordReset.PasswordReset;
import pl.tom.authservice.model.passwordResetData.PasswordResetData;
import pl.tom.authservice.repo.PasswordResetRepository;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.repo.UserRepository;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
public class PasswordResetSevice {

    private final EmailSender emailSender;
    private UserService userService;
    private UserRepository userRepository;
    private PasswordResetRepository passwordResetRepository;

    @Autowired
    public PasswordResetSevice(EmailSender emailSender, UserService userService, UserRepository userRepository, PasswordResetRepository passwordResetRepository) {
        this.emailSender = emailSender;
        this.userService = userService;
        this.userRepository = userRepository;
        this.passwordResetRepository = passwordResetRepository;
    }

    public boolean reset(String email) {

        Optional<User> userOptional = userService.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            deletePasswordResetByUserId(user.getUser_id());

            String code = codeGenerator();
            PasswordReset passwordReset = new PasswordReset(code, LocalDateTime.now(), user);


            passwordResetRepository.save(passwordReset);
            emailSender.sendEmail("tomek0290@gmail.com", "x-tom - reset hasła", "Zapomniałeś hasła? To nie problem. Oto link do zresetowania. Jest ważny 10min." +
                    "http://localhost:4200/resetuj-haslo?code=" + code + "&user=" + email);

            return true;
        } else {
            return false;
        }
    }

    public boolean check(PasswordResetData passwordResetData) {
        String emailToVerify = passwordResetData.getEmail();
        String codeToVerify = passwordResetData.getCode();

        Optional<User> userOptional = userService.findByEmail(emailToVerify);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Optional<PasswordReset> resetDataOptional = passwordResetRepository.getPasswordResetByUserId(user.getUser_id());

            if (resetDataOptional.isPresent()) {
                PasswordReset data = resetDataOptional.get();

                return verifyCode(data, codeToVerify);
            } else {
                return false;
            }
        } else {
            return false;
        }

    }


    public void deletePasswordResetByUserId(Long userId) {
        passwordResetRepository.deletePasswordResetByUserId(userId);
    }

    public void deletePasswordResetByUserId(String email) {
         User user = userRepository.getUserByEmail(email);
         passwordResetRepository.deletePasswordResetByUserId(user.getUser_id());
    }

    private boolean verifyCode(PasswordReset data, String codeToVerify) {
        String code = data.getPass_reset_code();
        LocalDateTime dateTime = data.getPass_reset_date();
        LocalDateTime now = LocalDateTime.now();

        if (code.equals(codeToVerify) && now.isBefore(dateTime.plusMinutes(10))) {
            return true;
        } else {
            return false;
        }
    }

    private String codeGenerator() {
        String code = "";

        for (int i = 0; i < 20; i++) {
            code += new Random().nextInt(11);
        }
        return code;
    }


}
