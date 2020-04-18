package pl.tom.apiservice.api.orders;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.orders.Orders;
import pl.tom.apiservice.service.OrdersService;

import java.util.List;

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

    @GetMapping("/all")
    public List<Orders> getAll(){
        LOG.info("method: getAll(). Add new order to database");
        return ordersService.getAll();
    }

    @GetMapping("/{id}")
    public Orders getById(@PathVariable(value = "id") Long id) {
        LOG.info("method: getById(). Trying get order with {}", id);
        return ordersService.getById(id);
    }

    @GetMapping("/user/{id}")
    public List<Orders> getOrdersByUserId(@PathVariable(value = "id") Long id) {
        LOG.info("method: getOrdersByUserId(). Trying get order with user id {}", id);
        return ordersService.getOrdersByUserId(id);
    }

    @PostMapping("/create")
    public void create(@RequestBody Orders order) {
        LOG.info("method: create(). Add new order to database");
         ordersService.create(order);
    }

    @PutMapping("/detail/{id}")
    public String editDetail(@PathVariable(value = "id") Long id, @RequestBody Orders ordersEdited) {
        LOG.info("method: editDetail(). Update order detail to database");
        return ordersService.editDetail(id, ordersEdited);
    }

    @PutMapping("/address/{id}")
    public String editAddress(@PathVariable(value = "id") Long id, @RequestBody Orders ordersEdited) {
        LOG.info("method: editAddress(). Update order address to database");
        return ordersService.editAddress(id, ordersEdited);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id) {
        LOG.info("method: deleteById(). Deleting order about id {}", id);
        ordersService.deleteById(id);
    }

}
