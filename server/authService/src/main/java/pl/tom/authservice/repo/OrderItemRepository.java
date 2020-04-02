package pl.tom.authservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.tom.authservice.model.order.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
