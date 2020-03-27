package pl.tom.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.authservice.auth.TokenGenerator;
import pl.tom.authservice.model.user.Credentials;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.model.user.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private TokenGenerator tokenGenerator;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenGenerator tokenGenerator) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
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

    public void save(User user){
        user.setUser_email(user.getUser_email().toLowerCase());
        user.setUser_password(passwordEncoder.encode(user.getUser_password()));
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

    public boolean checkEmail(String email) {
        System.out.println("co szukasz?: "+ email);

        User user = userRepository.getUserByEmail(email);

        if(user == null){
            System.out.println("user = null");
            return false;
        }else {
            System.out.println("user istnieje");
            return true;
        }

    }
}
