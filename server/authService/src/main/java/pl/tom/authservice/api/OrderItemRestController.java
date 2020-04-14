package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.order.OrderItem;
import pl.tom.authservice.service.OrderItemService;

import java.util.List;

//---->localhost
@CrossOrigin(origins = "http://localhost:4200")

//---->remote
//@CrossOrigin(origins = "https://x-tom-client.herokuapp.com")
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
    public int create(@RequestBody List<OrderItem> orderItemList) {
        LOG.info("method: create()");
        int orderNumber = orderItemService.create(orderItemList);
        LOG.info("Add new orderItem to database");
        return orderNumber;
    }

}

