package pl.tom.authservice.model.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LaptopRepository  extends JpaRepository<Laptop, Long> {

    @Query("SELECT l FROM Laptop l where l.laptop_status =  ?1")
    List<Laptop> getLaptopByStatus(String status);
}
