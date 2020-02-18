package pl.tom.apiservice.model.drone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderDroneRepository extends JpaRepository<OrderDrone, Long> {


    @Query("SELECT o FROM OrderDrone o, Drone d where o.drone.drone_id = d.drone_id and d.drone_mark = 'DJI PRO'")
    List<OrderDrone>getDronesOrders();
}
