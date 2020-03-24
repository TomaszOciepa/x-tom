package pl.tom.apiservice.model.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    @Query("SELECT o FROM OrderItem o where o.order_item_number = ?1")
    List<OrderItem> getOrderItemByOrderNumber(int number);

}
