package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.orders.Orders;
import pl.tom.apiservice.model.orders.OrdersRepository;


import java.time.LocalDateTime;
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


    public void create(List<Orders> ordersList) {
        int orderNumber = orderNumberGenerator();
        ordersList.stream().forEach(order -> {
            order.setOrders_number(orderNumber);
            ordersRepository.save(order);
        });

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


    private int orderNumberGenerator() {

        List<Orders> ordersList = getAll();
        int ordersListSize = ordersList.size();

        if (ordersListSize == 0) {
            return numberGenerator(0);
        } else {
            int lastItemOrder = (ordersListSize - 1);
            int lastOrderNumber = ordersList.get(lastItemOrder).getOrders_number();

            return numberGenerator(lastOrderNumber);
        }
    }

    private int numberGenerator(int n) {

        if (n == 0) {
            int year = LocalDateTime.now().getYear();
            int month = LocalDateTime.now().getMonthValue();
            String joinNumber = Integer.toString(year) + Integer.toString(month) + Integer.toString(1);
            int number = Integer.parseInt(joinNumber);
            return number;
        } else {
            return n + 1;
        }
    }

}
