package pl.tom.authservice.model.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DroneRepository extends JpaRepository<Drone, Long> {

    @Query("SELECT d FROM Drone d where d.drone_status =  ?1")
    List<Drone> getDroneByStatus(String status);
}
