package pl.tom.authservice.model.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SmartphoneRepository extends JpaRepository<Smartphone, Long> {

    @Query("SELECT s FROM Smartphone s where s.smartphone_status =  ?1")
    List<Smartphone> getSmartphoneByStatus(String status);
}
