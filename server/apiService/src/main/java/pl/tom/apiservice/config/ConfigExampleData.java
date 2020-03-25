package pl.tom.apiservice.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import pl.tom.apiservice.model.cart.Cart;
import pl.tom.apiservice.model.cart.CartRepository;
import pl.tom.apiservice.model.order.OrderItem;
import pl.tom.apiservice.model.order.OrderItemRepository;
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

    private CartRepository cartRepository;

    private OrderItemRepository orderItemRepository;

    @Autowired
    public ConfigExampleData(ProductRepository productRepository, PasswordEncoder passwordEncoder, UserRepository userRepository, OrdersRepository ordersRepository, CartRepository cartRepository, OrderItemRepository orderItemRepository) {
        this.productRepository = productRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.ordersRepository = ordersRepository;
        this.cartRepository = cartRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void runProducts() {

        User root = new User("tom.ociepa@gmail.com", passwordEncoder.encode("Pass123!"), "ADMIN", "Tomasz", "Ociepa", 882945985L, "80-169", "Gdańsk", "Jana Pawła 999");
        userRepository.save(root);

        User user = new User("tomek021@wp.pl", passwordEncoder.encode("Pass123!"), "USER", "Tom", "Kowalski", 882923243L, "80-169", "Sopot", "Monciak 1");
        userRepository.save(user);

        Product drone = new Product("drone", "dj pro", "promocja", "kupuj lata szybko", "tak", 2999, 100, 20, 2000);
        productRepository.save(drone);

        Product laptop = new Product("laptop", "dell", "polecamy", "biznesowy", "intel core i7", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop);

        Product smartphone = new Product("smartphone", "nokia", "promocja", "Najlepsza nokia wszechczasów", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone);

        Cart cart1 = new Cart(1, drone, root);
        cartRepository.save(cart1);

        Cart cart2 = new Cart(1, laptop, root);
        cartRepository.save(cart2);

        Cart cart3 = new Cart(2, smartphone, user);
        cartRepository.save(cart3);
    }

}
