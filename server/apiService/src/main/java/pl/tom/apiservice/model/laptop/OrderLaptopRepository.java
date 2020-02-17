package pl.tom.apiservice.model.laptop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderLaptopRepository extends JpaRepository<OrderLaptop, Long> {

    @Query("SELECT o FROM OrderLaptop o, Laptop l where o.laptop.laptop_id = l.laptop_id and l.laptop_mark = 'Think'")
    List<OrderLaptop> getLaptopOrders();
}
