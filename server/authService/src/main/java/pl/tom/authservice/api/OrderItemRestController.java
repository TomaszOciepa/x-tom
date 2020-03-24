package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.order.OrderItem;
import pl.tom.authservice.service.OrderItemService;


import javax.servlet.http.HttpServletResponse;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order")
public class OrderItemRestController {

    private static final Logger LOG = LoggerFactory.getLogger(OrderItemRestController.class);

    private OrderItemService orderItemService;

    @Autowired
    public OrderItemRestController(OrderItemService orderItemService) {
        this.orderItemService = orderItemService;
    }


    @PostMapping("/create")
    public int create(@RequestBody List<OrderItem> orderItemList, HttpServletResponse response) {
        LOG.info("method: create(). Add new orderItem to database");

        int orderNumber = orderItemService.create(orderItemList);
        return orderNumber;
    }

}

