package pl.tom.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.authservice.model.User;
import pl.tom.authservice.model.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findAll().stream().filter(user -> user.getEmail().equals(email.toLowerCase())).findFirst();
    }

    public boolean emailExists(User user) {
        if (!findByEmail(user.getEmail()).isPresent()) {
            return false;
        } else {
            return true;
        }
    }

    public void save(User user){
        user.setEmail(user.getEmail().toLowerCase());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("USER");
        userRepository.save(user);
    }

    public boolean emailValid(String email){
         String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
         return email.matches(regex);
    }
}
