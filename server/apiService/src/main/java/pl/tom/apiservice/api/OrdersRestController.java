package pl.tom.apiservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.Orders;
import pl.tom.apiservice.model.OrdersRepository;
import pl.tom.apiservice.model.drone.Drone;
import pl.tom.apiservice.service.OrdersService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
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
    public Orders getById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: getById(). Trying get order with {}", id);
        return ordersService.getById(id);
    }

    @PostMapping("/create")
    public Orders create(@RequestBody Orders orders, HttpServletResponse response) {
        LOG.info("method: create(). Add new order to database");
        return ordersService.create(orders);
    }

    @PutMapping("/{id}")
    public String edit(@PathVariable(value = "id") Long id, @RequestBody Orders ordersEdited, HttpServletResponse response) {
        LOG.info("method: edit(). Update order to database");
        return ordersService.edit(id, ordersEdited);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteById(). Deleting order about id {}", id);
        ordersService.deleteById(id);
    }

}
