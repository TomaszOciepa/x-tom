package pl.tom.apiservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import pl.tom.apiservice.model.*;
import pl.tom.apiservice.model.drone.Drone;
import pl.tom.apiservice.model.drone.DroneRepository;
import pl.tom.apiservice.model.drone.OrderDrone;
import pl.tom.apiservice.model.drone.OrderDroneRepository;
import pl.tom.apiservice.model.laptop.Laptop;
import pl.tom.apiservice.model.laptop.LaptopRepository;
import pl.tom.apiservice.model.laptop.OrderLaptop;
import pl.tom.apiservice.model.laptop.OrderLaptopRepository;
import pl.tom.apiservice.model.smartphone.OrderSmartphone;
import pl.tom.apiservice.model.smartphone.OrderSmartphoneRepository;
import pl.tom.apiservice.model.smartphone.Smartphone;
import pl.tom.apiservice.model.smartphone.SmartphoneRepository;
import pl.tom.apiservice.model.user.User;
import pl.tom.apiservice.model.user.UserRepository;

import java.time.LocalDateTime;

@Component
public class ConfigExampleData {

    private ProductRepository productRepository;

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    private OrdersRepository ordersRepository;
//    private LaptopRepository laptopRepository;
//
//    private OrderLaptopRepository orderLaptopRepository;
//
//    private SmartphoneRepository smartphoneRepository;
//
//    private OrderSmartphoneRepository orderSmartphoneRepository;
//
//    private DroneRepository droneRepository;
//    private OrderDroneRepository orderDroneRepository;

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

        Product laptop = new Product("laptop", "dell", "polecamy", "biznesowy", "i7", "windows 10", "ssd", "nvidia", 4000, 16, 256, 17, 200);
        productRepository.save(laptop);

        Product smartphone = new Product("smartphone", "nokia", "promocja", "Najlepsza nokia wszechczasów", "android", 2000, 8, 64, 6, 100, 22);
        productRepository.save(smartphone);

        Orders orders1 = new Orders(LocalDateTime.now(), "oczekuje na zapłatę", 2, root, drone);
        ordersRepository.save(orders1);

        Orders orders2 = new Orders(LocalDateTime.now(), "wysłano", 1, user, smartphone);
        ordersRepository.save(orders2);

//        Product product1 = new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now());
//        repo.save(product1);
//
//        Product product2 = new Product("mcbook PRO", "Laptop", "Komputer profesionalny", 7500, 10, LocalDateTime.now());
//        repo.save(product2);
//
//        Product product3 = new Product("Samsung s7", "Telefon", "Wodoodporny telefon", 1500, 30, LocalDateTime.now());
//        repo.save(product3);
//
//        Product product4 = new Product("Iphone X", "Telefon", "Hmmm co by napisać", 2500, 15, LocalDateTime.now());
//        repo.save(product4);
//
//        Product product5 = new Product("Słuchawki Marshall", "Akcesoria", "Słuchawki bezprzewodowe", 500, 60, LocalDateTime.now());
//        repo.save(product5);
//
//        Laptop laptop1 = new Laptop("Dell", "Komputer Laptop Dell i7", 3000, "promocja", "Windows", "i7", 8, "SSD", 250, "NIVIDIA",17, 200);
//        laptopRepository.save(laptop1);
//
//        Laptop laptop2 = new Laptop("Think", "Komputer Laptop ThinkPad", 3000, "polecamy", "Windows", "i7", 8, "SSD", 250, "NIVIDIA",17, 200);
//        laptopRepository.save(laptop2);
//
//        OrderLaptop orderLaptop = new OrderLaptop(LocalDateTime.now(), 2, "Zaplacono", root, laptop1);
//        orderLaptopRepository.save(orderLaptop);
//
//        OrderLaptop orderLaptop1 = new OrderLaptop(LocalDateTime.now(), 2, "Zaplacono", root, laptop2);
//        orderLaptopRepository.save(orderLaptop1);
//
//        Smartphone smartphone1 = new Smartphone("Samsung", "Smartphone telefon smasung s9",2000, "polecamy", "Android", 7, 16, 8, 20, 300);
//        smartphoneRepository.save(smartphone1);
//
//        Smartphone smartphone2 = new Smartphone("Iphone", "Smartphone telefon Iphone X",9000, "promocja", "Android", 7, 16, 8, 20, 300);
//        smartphoneRepository.save(smartphone2);
//
//        OrderSmartphone orderSmartphone = new OrderSmartphone(LocalDateTime.now(), 1, "Czeka na platnosc", root, smartphone1);
//        orderSmartphoneRepository.save(orderSmartphone);
//
//        OrderSmartphone orderSmartphone1 = new OrderSmartphone(LocalDateTime.now(), 1, "Czeka na platnosc", root, smartphone2);
//        orderSmartphoneRepository.save(orderSmartphone1);
//
//        Drone drone1 = new Drone("DJI","Dron DJI super promocja", 4000, "polecamy", 20, 3000, "Tak", 300);
//        droneRepository.save(drone1);
//
//        Drone drone2 = new Drone("DJI PRO","Dron DJI PRO polecamy", 6000, "promocja", 20, 3000, "Tak", 300);
//        droneRepository.save(drone2);
//
//        OrderDrone orderDrone = new OrderDrone(LocalDateTime.now(), 3, "Zaplacono", root, drone1);
//        orderDroneRepository.save(orderDrone);
//
//        OrderDrone orderDrone2 = new OrderDrone(LocalDateTime.now(), 3, "Wyslano", root, drone2);
//        orderDroneRepository.save(orderDrone2);
    }

}
