package pl.tom.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.authservice.email.EmailSender;
import pl.tom.authservice.model.accountConfirmation.AccountConfirmation;
import pl.tom.authservice.repo.AccountConfirmationRepository;
import pl.tom.authservice.model.user.User;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
public class AccountConfirmationService {

    private AccountConfirmationRepository accountConfirmationRepository;
    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private final EmailSender emailSender;

    @Autowired
    public AccountConfirmationService(AccountConfirmationRepository accountConfirmationRepository, UserService userService, PasswordEncoder passwordEncoder, EmailSender emailSender) {
        this.accountConfirmationRepository = accountConfirmationRepository;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.emailSender = emailSender;
    }

    public boolean checkEmail(String email) {
        Optional<User> userOptional = userService.findByEmail(email);

        if (userOptional.isEmpty()) {
            boolean result = accountConfirmationfindByEmail(email);
            if (result) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public boolean save(AccountConfirmation accountConfirmationData) {
        String newEmail = accountConfirmationData.getAccount_confirmation_email().toLowerCase();

        boolean result = checkEmail(newEmail);

        if(result){
            String code = codeGenerator();
            String password = accountConfirmationData.getAccount_confirmation_password();

            accountConfirmationData.setAccount_confirmation_email(newEmail.toLowerCase());
            accountConfirmationData.setAccount_confirmation_code(code);
            accountConfirmationData.setAccount_confirmation_date(LocalDateTime.now());

            String encodePassword = passwordEncoder.encode(password);

            accountConfirmationData.setAccount_confirmation_password(encodePassword);
            accountConfirmationRepository.save(accountConfirmationData);

            emailSender.sendEmail("tomek0290@gmail.com", "x-tom - potwierdzenie rejestracji", "Dziękuję za chęć założenie konta w moim sklepie. Poniższy link służy do aktywacji Twojego konta." +
                    "Link Jest ważny 10min" +" <br>"+
                    "Link do weryfikacji: http://localhost:4200/potwierdzenie-rejestracji/" + code + "/" + newEmail);

            return true;
        }else {
            return false;
        }
    }

    public boolean confirmation(AccountConfirmation accountConfirmationData) {
        String email = accountConfirmationData.getAccount_confirmation_email();
        String code = accountConfirmationData.getAccount_confirmation_code();

        Optional<AccountConfirmation> accountOptional = accountConfirmationRepository.getAccountConfirmationByEmailAndCode(email, code);

        if(accountOptional.isPresent()){
            AccountConfirmation account = accountOptional.get();
            Long accountId = account.getAccount_confirmation_id();
            String accountCode = account.getAccount_confirmation_code();
            LocalDateTime accountSaveDate = account.getAccount_confirmation_date();
            LocalDateTime now = LocalDateTime.now();

            if(accountCode.equals(code) && now.isBefore(accountSaveDate.plusMinutes(10))){
                String accountEmail = account.getAccount_confirmation_email();
                String accountPassword = account.getAccount_confirmation_password();

                User user = new User(accountEmail, accountPassword);

                userService.saveAccount(user);
                emailSender.sendEmail("tomek0290@gmail.com", "x-tom - Dziękuę za założenie konta", "Bardzo dziękuje za założenie konta w moim sklepie. Możesz się zalogować. " +
                        " Link do logowania: http://localhost:4200/logowanie ");
                accountConfirmationRepository.deleteAccountConfirmationByEmail(accountId);
                return true;
            }else {
                emailSender.sendEmail("tomek0290@gmail.com", "x-tom - Odmowa weryfikacji", "Nie udało się zweryfikować Twojego konta. Link jest nie aktywny. Spróbuj ponownie " +
                        "Link do rejestracji: http://localhost:4200/rejestracja ");
                accountConfirmationRepository.deleteAccountConfirmationByEmail(accountId);
                return false;
            }
        }else {
            return false;
        }
    }

    private boolean accountConfirmationfindByEmail(String email) {
        Optional<AccountConfirmation> accountConfirmationOptional = accountConfirmationRepository.findAll().stream().filter(account -> account.getAccount_confirmation_email()
                .equals(email.toLowerCase())).findFirst();

        if (accountConfirmationOptional.isPresent()) {
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
