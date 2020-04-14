package pl.tom.apiservice.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import pl.tom.apiservice.model.cart.Cart;
import pl.tom.apiservice.repo.CartRepository;
import pl.tom.apiservice.repo.OrderItemRepository;
import pl.tom.apiservice.repo.OrdersRepository;
import pl.tom.apiservice.model.product.Product;
import pl.tom.apiservice.repo.ProductRepository;
import pl.tom.apiservice.model.user.User;
import pl.tom.apiservice.repo.UserRepository;

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

        Product drone = new Product("drone", "dji", "polecamy", "DJI pro duży zasięg", "tak", 6999, 100, 20, 3000);
        productRepository.save(drone);

        Product smartphone2 = new Product("smartphone", "apple", "polecamy", "Apple 4GB", "iOs", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone2);

        Product laptop = new Product("laptop", "dell", "polecamy", "Dell SSD 16GB RAM", "intel core i7", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop);

        Product smartphone = new Product("smartphone", "nokia", "promocja", "Najlepsza nokia wszechczasów", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone);

        Product drone2 = new Product("drone", "parrot", "promocja", "Parrot duża wytrzymałość", "tak", 2999, 100, 15, 2000);
        productRepository.save(drone2);

        Product laptop3 = new Product("laptop", "hp", "polecamy", "HP 8GB RAM SSD", "intel core i7", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop3);

        Product laptop7 = new Product("laptop", "apple", "promocja", "APPLE 6GB RAM SSD", "intel core i5", "macOs", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop7);

        Product smartphone3 = new Product("smartphone", "huawei", "promocja", "Huawei 2GB Black", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone3);

        Product smartphone4 = new Product("smartphone", "sony", "promocja", "Sony 2GB Black", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone4);

        Product drone3 = new Product("drone", "hubsan", "polecamy", "Hubsan + bateria", "tak", 1599, 100, 7, 500);
        productRepository.save(drone3);

        Product drone4 = new Product("drone", "yuneec", "polecamy", "Yuneec Polecamy !!!", "tak", 2999, 100, 12, 2000);
        productRepository.save(drone4);

        Product drone5 = new Product("drone", "overmax", "polecamy", "Overmax tanio!!! gratisy", "tak", 1999, 100, 12, 2000);
        productRepository.save(drone5);

        Product drone6 = new Product("drone", "syma", "polecamy", "Syma Tani, duży zasięg", "tak", 2999, 100, 14, 1000);
        productRepository.save(drone6);

        Product laptop2 = new Product("laptop", "lenovo", "polecamy", "Lenovo 16GB RAM SSD", "intel core i5", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop2);

        Product laptop4 = new Product("laptop", "asus", "promocja", "ASUS 6GB RAM SSD", "intel core i3", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop4);

        Product laptop5 = new Product("laptop", "acer", "polecamy", "ACER 16GB RAM SSD", "intel core i9", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop5);

        Product laptop6 = new Product("laptop", "msi", "promocja", "MSI 6GB RAM SSD", "intel core i3", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop6);

        Product laptop8 = new Product("laptop", "huawei", "polecamy", "Huawei 6GB RAM SSD", "intel core i3", "windows 10", "ssd", "dedykowana nvidia geforce", 4000, 16, 256, 17, 200);
        productRepository.save(laptop8);

        Product smartphone1 = new Product("smartphone", "samsung", "promocja", "Samsung 4GB Black", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone1);

        Product smartphone5 = new Product("smartphone", "xiaomi", "polecamy", "Xiaomi 2GB Black", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone5);

        Product smartphone6 = new Product("smartphone", "lg", "polecamy", "LG 4GB Black", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone6);

        Product smartphone7 = new Product("smartphone", "htc", "polecamy", "HTC 4GB Black", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone7);


        Cart cart1 = new Cart(1, drone, root);
        cartRepository.save(cart1);

        Cart cart2 = new Cart(1, laptop, root);
        cartRepository.save(cart2);

        Cart cart3 = new Cart(2, smartphone, user);
        cartRepository.save(cart3);
    }

}
