package pl.tom.authservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.tom.authservice.model.orders.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
