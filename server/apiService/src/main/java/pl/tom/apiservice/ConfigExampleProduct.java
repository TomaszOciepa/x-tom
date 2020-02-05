package pl.tom.apiservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.model.ProductRepository;

import java.time.LocalDateTime;

@Component
public class ConfigExampleProduct {

    private ProductRepository repo;

    @Autowired
    public ConfigExampleProduct(ProductRepository repo) {
        this.repo = repo;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void run() {
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
}
