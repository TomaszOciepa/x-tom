package pl.tom.apiservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.model.ProductRepository;
import pl.tom.apiservice.model.User;
import pl.tom.apiservice.model.UserRepository;

import java.time.LocalDateTime;

@Component
public class ConfigExampleData {

    private ProductRepository repo;

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    @Autowired
    public ConfigExampleData(ProductRepository repo, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void runProducts() {
        Product product1 = new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now());
        repo.save(product1);

        Product product2 = new Product("mcbook PRO", "Laptop", "Komputer profesionalny", 7500, 10, LocalDateTime.now());
        repo.save(product2);

        Product product3 = new Product("Samsung s7", "Telefon", "Wodoodporny telefon", 1500, 30, LocalDateTime.now());
        repo.save(product3);

        Product product4 = new Product("Iphone X", "Telefon", "Hmmm co by napisać", 2500, 15, LocalDateTime.now());
        repo.save(product4);

        Product product5 = new Product("Słuchawki Marshall", "Akcesoria", "Słuchawki bezprzewodowe", 500, 60, LocalDateTime.now());
        repo.save(product5);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void runRoot() {
        User root = new User("tom.ociepa@gmail.com", passwordEncoder.encode("Pass123!"), "ADMIN");
        userRepository.save(root);
    }
}
