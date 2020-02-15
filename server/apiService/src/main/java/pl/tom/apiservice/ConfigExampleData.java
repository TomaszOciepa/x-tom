package pl.tom.apiservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import pl.tom.apiservice.model.*;

import java.time.LocalDateTime;

@Component
public class ConfigExampleData {

    private ProductRepository repo;

    private PasswordEncoder passwordEncoder;

    private UserRepository userRepository;

    private LaptopRepository laptopRepository;

    private OrderLaptopRepository orderLaptopRepository;

    private SmartphoneRepository smartphoneRepository;

    private OrderSmartphoneRepository orderSmartphoneRepository;

    private DroneRepository droneRepository;
    private OrderDroneRepository orderDroneRepository;

    @Autowired
    public ConfigExampleData(ProductRepository repo, PasswordEncoder passwordEncoder, UserRepository userRepository, LaptopRepository laptopRepository, OrderLaptopRepository orderLaptopRepository, SmartphoneRepository smartphoneRepository, OrderSmartphoneRepository orderSmartphoneRepository, DroneRepository droneRepository, OrderDroneRepository orderDroneRepository) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.laptopRepository = laptopRepository;
        this.orderLaptopRepository = orderLaptopRepository;
        this.smartphoneRepository = smartphoneRepository;
        this.orderSmartphoneRepository = orderSmartphoneRepository;
        this.droneRepository = droneRepository;
        this.orderDroneRepository = orderDroneRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void runProducts() {
        User root = new User("tom.ociepa@gmail.com", passwordEncoder.encode("Pass123!"), "ADMIN");
        userRepository.save(root);

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

        Laptop laptop1 = new Laptop("Dell", 3000, "Promocja", "Windows", "i7", 8, "SSD", 250, "NIVIDIA",17, 200);
        laptopRepository.save(laptop1);

        OrderLaptop orderLaptop = new OrderLaptop(LocalDateTime.now(), 2, "Zaplacono", root, laptop1);
        orderLaptopRepository.save(orderLaptop);

        Smartphone smartphone1 = new Smartphone("Samsung", 2000, "Promocja", "Android", 7, 16, 8, 20, 300);
        smartphoneRepository.save(smartphone1);

        OrderSmartphone orderSmartphone = new OrderSmartphone(LocalDateTime.now(), 1, "Czeka na platnosc", root, smartphone1);
        orderSmartphoneRepository.save(orderSmartphone);

        Drone drone1 = new Drone("DJI", 4000, "Wyprzedaz", 20, 3000, "Tak", 300);
        droneRepository.save(drone1);

        OrderDrone orderDrone = new OrderDrone(LocalDateTime.now(), 3, "Zaplacono", root, drone1);
        orderDroneRepository.save(orderDrone);
    }

}
