package pl.tom.apiservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import pl.tom.apiservice.model.order.OrderItem;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    @Query("SELECT o FROM OrderItem o")
    Optional<List<OrderItem>> getAllOrderItem();

    @Query("SELECT o FROM OrderItem o where o.order_item_number = ?1")
    Optional<List<OrderItem>> getOrderItemByOrderNumber(int number);

    @Modifying
    @Transactional
    @Query("DELETE FROM OrderItem o where o.order_item_number = ?1")
    void deleteOrderItemByOrderNumber(int number);

}
