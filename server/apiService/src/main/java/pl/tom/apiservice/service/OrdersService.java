package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Orders;
import pl.tom.apiservice.model.OrdersRepository;
import pl.tom.apiservice.model.drone.Drone;

import java.util.List;
import java.util.Optional;

@Service
public class OrdersService {

    private OrdersRepository ordersRepository;

    public OrdersService(OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public List<Orders> getAll() {
        return ordersRepository.findAll();
    }


    public Orders create(Orders orders) {
        orders.setOrders_status(orders.getOrders_status().toLowerCase());
        return ordersRepository.save(orders);
    }

    public String edit(Long id, Orders ordersEdited) {
        Optional<Orders> orders = ordersRepository.findById(id);

        if (orders.isPresent()) {
            orders.get().setOrders_status(ordersEdited.getOrders_status());
            orders.get().setOrders_date_time(ordersEdited.getOrders_date_time());
            ordersRepository.save(orders.get());
            return "updated";
        } else {
            return "not found";
        }
    }

    public void deleteById(Long id) {
        ordersRepository.deleteById(id);
    }

    public Orders getById(Long id) {
        return ordersRepository.findById(id).get();
    }
}
