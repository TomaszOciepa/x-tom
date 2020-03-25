package pl.tom.authservice.service;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.order.OrderItem;
import pl.tom.authservice.model.order.OrderItemRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderItemService {

    private OrderItemRepository orderItemRepository;
    private ProductService productService;

    public OrderItemService(OrderItemRepository orderItemRepository, ProductService productService) {
        this.orderItemRepository = orderItemRepository;
        this.productService = productService;
    }

    public List<OrderItem> getAll() {
        return orderItemRepository.findAll();
    }

    public int create(List<OrderItem> orderItemList) {
        int orderNumber = orderNumberGenerator();
        orderItemList.stream().forEach(order -> {
            order.setOrder_item_number(orderNumber);
            order.setOrder_item_price(order.getProduct().getProduct_price());
          productService.save_amount_sold_product(order.getProduct().getProduct_id(), order.getOrder_item_amount());
            orderItemRepository.save(order);
        });

        return orderNumber;
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

