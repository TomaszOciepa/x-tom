package pl.tom.testdbjava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import pl.tom.testdbjava.model.*;

import java.time.LocalDateTime;

@Component
public class ConfigData {

    private ProductRepo productRepo;
    private OrderRepo orderRepo;
    private UserRepo userRepo;

    @Autowired
    public ConfigData(ProductRepo productRepo, OrderRepo orderRepo, UserRepo userRepo) {
        this.productRepo = productRepo;
        this.orderRepo = orderRepo;
        this.userRepo = userRepo;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void run(){


        Product product1 = new Product("Dell", "laptop", 3000,  "tak", "Ubuntu", "i7", 64, "SSD");
        productRepo.save(product1);

        User user1 = new User("Tomasz", "Ociepa");
        userRepo.save(user1);

        Order order1 = new Order(LocalDateTime.now(), user1, product1);
        orderRepo.save(order1);

    }

}
