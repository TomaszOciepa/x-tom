package pl.tom.apiservice.api.laptop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.laptop.OrderLaptop;
import pl.tom.apiservice.service.laptop.OrderLaptopService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order/laptop")
public class OrderLaptopRestController {

    private static final Logger LOG = LoggerFactory.getLogger(OrderLaptopRestController.class);

    private OrderLaptopService orderLaptopService;

    @Autowired
    public OrderLaptopRestController(OrderLaptopService orderLaptopService) {
        this.orderLaptopService = orderLaptopService;
    }

    @GetMapping("/all")
    public List<OrderLaptop> getAll(HttpServletResponse response) {
        LOG.info("method: getAll. Trying get all order laptops");
        response.setStatus(200);
        return orderLaptopService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<OrderLaptop> getById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: getById. Trying get order laptop with {}", id);
        response.setStatus(200);
        return orderLaptopService.getById(id);
    }

    @PostMapping("/create")
    public OrderLaptop create(@RequestBody OrderLaptop orderLaptop, HttpServletResponse response) {
        LOG.info("method: create. Add new order laptop to database");
        return orderLaptopService.save(orderLaptop);
    }

    @PutMapping("/{id}")
    public Optional<OrderLaptop> edit(@PathVariable(value = "id") Long id, @RequestBody OrderLaptop orderLaptopEdited, HttpServletResponse response) {
        LOG.info("method: edit. Update order laptop to database");
        return orderLaptopService.edit(id, orderLaptopEdited);
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteById. Deleting order laptop about id {}", id);
        orderLaptopService.deleteById(id);
        return "Remove laptop about id: " + id;
    }

//    @GetMapping("/orders")
//    public List<OrderLaptop> getOrders(){
//        return orderLaptopService.orders();
//    }
}
