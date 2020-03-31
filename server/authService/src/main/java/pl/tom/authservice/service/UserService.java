package pl.tom.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.authservice.auth.TokenGenerator;
import pl.tom.authservice.email.EmailSender;
import pl.tom.authservice.model.passwordReset.PasswordResetData;
import pl.tom.authservice.model.user.Credentials;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.model.user.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private final EmailSender emailSender;
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private TokenGenerator tokenGenerator;

    @Autowired
    public UserService(EmailSender emailSender, PasswordEncoder passwordEncoder, UserRepository userRepository, TokenGenerator tokenGenerator) {
        this.emailSender = emailSender;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.tokenGenerator = tokenGenerator;
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findAll().stream().filter(user -> user.getUser_email().equals(email.toLowerCase())).findFirst();
    }

    public boolean emailExists(User user) {
        if (!findByEmail(user.getUser_email()).isPresent()) {
            return false;
        } else {
            return true;
        }
    }

    public void saveAccount(User user){
        user.setUser_email(user.getUser_email().toLowerCase());
        user.setUser_role("USER");
        userRepository.save(user);
    }

    public boolean emailValid(String email){
         String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
         return email.matches(regex);
    }

    public Credentials login(User client){
        Credentials credentials = new Credentials();
        if(emailExists(client)){
            Optional<User> user = findByEmail(client.getUser_email());
            if(passwordEncoder.matches(client.getUser_password(), user.get().getUser_password())){
                credentials.setUser(user.get());
                credentials.setToken(tokenGenerator.createToken(user.get()));
                return credentials;
            }else {
                return credentials;
            }
        }else {
            return credentials;
        }
    }

    public boolean setNewPassword(PasswordResetData passwordResetData) {
        String email = passwordResetData.getEmail();
        String newPassword = passwordResetData.getPassword();

        User user = userRepository.getUserByEmail(email);
        user.setUser_password(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        emailSender.sendEmail("tomek0290@gmail.com", "x-tom - nowe hasło", "Hasło dla konta: "+email+" zostało zmienione");
        return true;
    }

}
