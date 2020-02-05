package pl.tom.authservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import pl.tom.authservice.model.User;
import pl.tom.authservice.model.UserRepository;

@Component
public class ConfigRootApp {

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    @Autowired
    public ConfigRootApp(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void run() {
        User root = new User("tom.ociepa@gmail.com", passwordEncoder.encode("Pass123!"), "ADMIN");
        userRepository.save(root);
    }
}
