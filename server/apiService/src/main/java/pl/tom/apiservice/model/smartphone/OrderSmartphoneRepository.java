package pl.tom.apiservice.model.smartphone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderSmartphoneRepository  {

//    @Query("SELECT o FROM OrderSmartphone o, Smartphone s WHERE o.smartphone.smartphone_id = s.smartphone_id and s.smartphone_mark = 'Iphone'")
//    List<OrderSmartphone> getSmartphoneOrders();
}
