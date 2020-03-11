package pl.tom.apiservice.api.smartphone;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.smartphone.OrderSmartphone;
import pl.tom.apiservice.service.smartphone.OrderSmartphoneService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order/smartphone")
public class OrderSmartphoneRestController {

//    private static final Logger LOG = LoggerFactory.getLogger(OrderSmartphoneRestController.class);
//
//    private OrderSmartphoneService orderSmartphoneService;
//
//    @Autowired
//    public OrderSmartphoneRestController(OrderSmartphoneService orderSmartphoneService) {
//        this.orderSmartphoneService = orderSmartphoneService;
//    }
//
//    @GetMapping("/all")
//    public List<OrderSmartphone> getAll(HttpServletResponse response) {
//        LOG.info("method: getAll. Trying get all order smartphone");
//        response.setStatus(200);
//        return orderSmartphoneService.getAll();
//    }
//
//    @GetMapping("/{id}")
//    public Optional<OrderSmartphone> getById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
//        LOG.info("method: getById. Trying get order smartphone with {}", id);
//        response.setStatus(200);
//        return orderSmartphoneService.getById(id);
//    }
//
//    @PostMapping("/create")
//    public OrderSmartphone create(@RequestBody OrderSmartphone orderSmartphone, HttpServletResponse response) {
//        LOG.info("method: create. Add new order smartphone to database");
//        return orderSmartphoneService.save(orderSmartphone);
//    }
//
//    @PutMapping("/{id}")
//    public Optional<OrderSmartphone> edit(@PathVariable(value = "id") Long id, @RequestBody OrderSmartphone orderSmartphoneEdited, HttpServletResponse response) {
//        LOG.info("method: edit. Update order smartphone to database");
//        return orderSmartphoneService.edit(id, orderSmartphoneEdited);
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
//        LOG.info("method: deleteById. Deleting order smartphone about id {}", id);
//        orderSmartphoneService.deleteById(id);
//        return "Remove smartphone about id: " + id;
//    }
//
//    @GetMapping("/orders")
//    public List<OrderSmartphone> getOrders(){
//        return orderSmartphoneService.orders();
//    }
}
