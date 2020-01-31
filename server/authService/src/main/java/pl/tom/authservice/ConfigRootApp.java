package pl.tom.authservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import pl.tom.authservice.model.User;
import pl.tom.authservice.model.UserRepository;

@Component
public class ConfigRootApp {

    private UserRepository userRepository;

    @Autowired
    public ConfigRootApp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void run() {
        User root = new User("tom.ociepa@gmail.com", "Pass1234", "ADMIN");

        userRepository.save(root);
    }
}
