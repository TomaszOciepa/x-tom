package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.orders.Orders;
import pl.tom.apiservice.repo.OrdersRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrdersService {

    private OrdersRepository ordersRepository;
    private OrderItemService orderItemService;

    public OrdersService(OrdersRepository ordersRepository, OrderItemService orderItemService) {
        this.ordersRepository = ordersRepository;
        this.orderItemService = orderItemService;
    }

    public List<Orders> getAll() {
        return ordersRepository.findAll();
    }

    public Orders getById(Long id) {
        return ordersRepository.findById(id).get();
    }

    public List<Orders> getOrdersByUserId(Long id) {
        return ordersRepository.getOrdersByUserId(id);
    }

    public void create(Orders order) {
        order.setOrders_date_time(LocalDateTime.now());
        ordersRepository.save(order);
    }

    public String editDetail(Long id, Orders ordersEdited) {
        Optional<Orders> orders = ordersRepository.findById(id);

        if (orders.isPresent()) {
            orders.get().setOrders_status(ordersEdited.getOrders_status());
            orders.get().setOrders_delivery_method(ordersEdited.getOrders_delivery_method());
            orders.get().setOrders_payments_method(ordersEdited.getOrders_payments_method());
            orders.get().setOrders_number_delivery_days(ordersEdited.getOrders_number_delivery_days());

            orders.get().setOrders_date_time_delivery(
                    orders.get().getOrders_date_time().plusDays(orders.get().getOrders_number_delivery_days())
            );

            ordersRepository.save(orders.get());
            return "updated";
        } else {
            return "not found";
        }
    }

    public String editAddress(Long id, Orders ordersEdited) {
        Optional<Orders> orders = ordersRepository.findById(id);

        if (orders.isPresent()) {

            orders.get().setOrders_firstName(ordersEdited.getOrders_firstName());
            orders.get().setOrders_lastName(ordersEdited.getOrders_lastName());
            orders.get().setOrders_email(ordersEdited.getOrders_email());
            orders.get().setOrders_phoneNumber(ordersEdited.getOrders_phoneNumber());
            orders.get().setOrders_zipCode(ordersEdited.getOrders_zipCode());
            orders.get().setOrders_city(ordersEdited.getOrders_city());
            orders.get().setOrders_street(ordersEdited.getOrders_street());

            ordersRepository.save(orders.get());
            return "updated";
        } else {
            return "not found";
        }
    }

    public void deleteById(Long id) {

        Orders order = getById(id);
        int orderNumber = order.getOrders_number();
        orderItemService.deleteOrderItemByOrderNumber(orderNumber);
        ordersRepository.deleteById(id);
    }


}
