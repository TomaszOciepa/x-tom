package pl.tom.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.authservice.auth.TokenGenerator;
import pl.tom.authservice.email.EmailSender;
import pl.tom.authservice.model.passwordResetData.PasswordResetData;
import pl.tom.authservice.model.credentials.Credentials;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.repo.UserRepository;

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

    public Credentials login(User client) {
        Credentials credentials = new Credentials();
        String clientEmail = client.getUser_email();
        String clientPassword = client.getUser_password();

        User user = userRepository.getUserByEmail(clientEmail);
        String userPassword = user.getUser_password();

        boolean passwordMatches = passwordEncoder.matches(clientPassword, userPassword);

        if (passwordMatches) {
            String token = tokenGenerator.createToken(user);
            credentials.setUser(user);
            credentials.setToken(token);
            credentials.setStatus(true);
            return credentials;
        } else {
            credentials.setStatus(false);
            return credentials;
        }
    }

    public void saveAccount(User user) {
        user.setUser_email(user.getUser_email().toLowerCase());
        user.setUser_role("USER");
        userRepository.save(user);
    }

    public boolean setNewPassword(PasswordResetData passwordResetData) {
        String email = passwordResetData.getEmail();
        String newPassword = passwordResetData.getPassword();

        User user = userRepository.getUserByEmail(email);
        user.setUser_password(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        emailSender.sendEmail(email, "x-tom - nowe hasło", "Hasło dla konta: " + email + " zostało zmienione");
        return true;
    }

    public boolean emailExists(String email) {
        Optional<User> userByEmail = findByEmail(email);

        if (userByEmail.isPresent()) {
            return false;
        } else {
            return true;
        }
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findAll().stream().filter(user -> user.getUser_email().equals(email.toLowerCase())).findFirst();
    }

    public boolean emailValid(String email) {
        String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
        return email.matches(regex);
    }

}
