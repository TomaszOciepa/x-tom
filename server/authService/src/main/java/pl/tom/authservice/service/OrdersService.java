package pl.tom.authservice.service;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.orders.Orders;
import pl.tom.authservice.repo.OrdersRepository;

import java.time.LocalDateTime;

@Service
public class OrdersService {

    private OrdersRepository ordersRepository;

    public OrdersService(OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public void create(Orders order) {
        order.setOrders_date_time(LocalDateTime.now());
        order.setOrders_status("przyjęto do realizacji");
        ordersRepository.save(order);
    }

}

