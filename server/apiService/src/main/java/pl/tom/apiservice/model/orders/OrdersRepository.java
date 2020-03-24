package pl.tom.apiservice.model.orders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {


    @Query("SELECT o FROM Orders o WHERE o.user.user_id = ?1")
    List<Orders> getOrdersByUserId(Long id);
}

