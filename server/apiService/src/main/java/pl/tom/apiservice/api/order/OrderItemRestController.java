package pl.tom.apiservice.api.order;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.order.OrderItem;
import pl.tom.apiservice.model.orders.Orders;
import pl.tom.apiservice.service.OrderItemService;

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

    @GetMapping("/all")
    public List<OrderItem> getAll(){
        LOG.info("method: getAll(). Get All orderItem");
        return orderItemService.getAll();
    }

    @GetMapping("/{id}")
    public OrderItem getById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: getById(). Trying get orderItem with {}", id);
        return orderItemService.getById(id);
    }

    @GetMapping("/number/{number}")
    public List<OrderItem> getOrderItemByOrderNumber(@PathVariable(value = "number") int number, HttpServletResponse response) {
        LOG.info("method: getOrderItemByOrderNumber(). Trying get order item with number {}", number);
        return orderItemService.getOrderItemByOrderNumber(number);
    }

    @PostMapping("/create")
    public int create(@RequestBody List<OrderItem> orderItemList, HttpServletResponse response) {
        LOG.info("method: create(). Add new orderItem to database");

        int orderNumber = orderItemService.create(orderItemList);
        return orderNumber;
    }

    @PutMapping("/{id}")
    public String edit(@PathVariable(value = "id") Long id, @RequestBody OrderItem orderItemEdited, HttpServletResponse response) {
        LOG.info("method: edit(). Update orderItem to database");
        return orderItemService.edit(id, orderItemEdited);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteById(). Deleting orderItem about id {}", id);
        orderItemService.deleteById(id);
    }
}
