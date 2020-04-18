package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.orders.Orders;
import pl.tom.authservice.service.OrdersService;

//localhost
@CrossOrigin(origins = "http://localhost:4200")
//aws
//@CrossOrigin(origins = "http://x-tom-shop.s3-website.eu-central-1.amazonaws.com")
@RestController
@RequestMapping("/orders")
public class OrdersRestController {

    private static final Logger LOG = LoggerFactory.getLogger(OrdersRestController.class);

    private OrdersService ordersService;

    @Autowired
    public OrdersRestController(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    @PostMapping("/create")
    public void create(@RequestBody Orders order) {
        LOG.info("method: create()");
        ordersService.create(order);
        LOG.info("Add new order to database");
    }


}

