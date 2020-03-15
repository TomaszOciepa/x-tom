package pl.tom.apiservice.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import pl.tom.apiservice.model.orders.Orders;
import pl.tom.apiservice.model.orders.OrdersRepository;
import pl.tom.apiservice.model.product.Product;
import pl.tom.apiservice.model.product.ProductRepository;
import pl.tom.apiservice.model.user.User;
import pl.tom.apiservice.model.user.UserRepository;

import java.time.LocalDateTime;

@Component
public class ConfigExampleData {

    private ProductRepository productRepository;

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    private OrdersRepository ordersRepository;

    @Autowired
    public ConfigExampleData(ProductRepository productRepository, PasswordEncoder passwordEncoder, UserRepository userRepository, OrdersRepository ordersRepository) {
        this.productRepository = productRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.ordersRepository = ordersRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void runProducts() {

        User root = new User("tom.ociepa@gmail.com", passwordEncoder.encode("Pass123!"), "ADMIN");
        userRepository.save(root);

        User user = new User("tomek021@wp.pl", passwordEncoder.encode("Pass123!"), "USER");
        userRepository.save(user);

        Product drone = new Product("drone", "dj pro", "promocja", "kupuj lata szybko", "tak", 2999, 100, 20, 2000);
        productRepository.save(drone);

        Product laptop = new Product("laptop", "dell", "polecamy", "biznesowy", "intel core i7", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop);

        Product smartphone = new Product("smartphone", "nokia", "promocja", "Najlepsza nokia wszechczasów", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone);

        Orders orders1 = new Orders(LocalDateTime.now(), "oczekuje na zapłatę", 2, root, drone);
        ordersRepository.save(orders1);

        Orders orders2 = new Orders(LocalDateTime.now(), "wysłano", 1, user, smartphone);
        ordersRepository.save(orders2);

    }

}
