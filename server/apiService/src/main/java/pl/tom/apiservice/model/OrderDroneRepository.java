package pl.tom.apiservice.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDroneRepository extends JpaRepository<OrderDrone, Long> {
}
