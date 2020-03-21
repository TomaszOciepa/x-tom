package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.order.OrderItem;
import pl.tom.apiservice.model.order.OrderItemRepository;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class OrderItemService {

    private OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }


    public List<OrderItem> getAll() {
        return orderItemRepository.findAll();
    }

    public OrderItem getById(Long id) {
        return orderItemRepository.findById(id).get();
    }

    public int create(List<OrderItem> orderItemList) {
        int orderNumber = orderNumberGenerator();
        orderItemList.stream().forEach(order -> {
            order.setOrder_item_number(orderNumber);
            orderItemRepository.save(order);
        });

        return orderNumber;
    }

    public String edit(Long id, OrderItem orderItemEdited) {
            OrderItem orderItem = getById(id);
            orderItem = orderItemEdited;
             orderItemRepository.save(orderItem);
             return "updated";
    }

    public void deleteById(Long id) {
            orderItemRepository.deleteById(id);
    }

    private int orderNumberGenerator() {

        List<OrderItem> orderItemList = getAll();
        int ordersListSize = orderItemList.size();

        if (ordersListSize == 0) {
            return numberGenerator(0);
        } else {
            int lastItemOrder = (ordersListSize - 1);
            int lastOrderNumber = orderItemList.get(lastItemOrder).getOrder_item_number();

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
