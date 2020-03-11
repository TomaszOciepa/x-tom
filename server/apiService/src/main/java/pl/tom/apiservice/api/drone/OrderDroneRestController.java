package pl.tom.apiservice.api.drone;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.drone.OrderDrone;
import pl.tom.apiservice.service.drone.OrderDroneService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order/drone")
public class OrderDroneRestController {

//    private static final Logger LOG = LoggerFactory.getLogger(OrderDroneRestController.class);
//
//    private OrderDroneService orderDroneService;
//
//    @Autowired
//    public OrderDroneRestController(OrderDroneService orderDroneService) {
//        this.orderDroneService = orderDroneService;
//    }
//
//    @GetMapping("/all")
//    public List<OrderDrone> getAll(HttpServletResponse response) {
//        LOG.info("method: getAll. Trying get all order drones");
//        response.setStatus(200);
//        return orderDroneService.getAll();
//    }
//
//    @GetMapping("/{id}")
//    public Optional<OrderDrone> getById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
//        LOG.info("method: getById. Trying get order drone with {}", id);
//        response.setStatus(200);
//        return orderDroneService.getById(id);
//    }
//
//    @PostMapping("/create")
//    public OrderDrone create(@RequestBody OrderDrone orderDrone, HttpServletResponse response) {
//        LOG.info("method: create. Add new order dron to database");
//        return orderDroneService.save(orderDrone);
//    }
//
//    @PutMapping("/{id}")
//    public Optional<OrderDrone> edit(@PathVariable(value = "id") Long id, @RequestBody OrderDrone orderDroneEdited, HttpServletResponse response) {
//        LOG.info("method: edit. Update order dron to database");
//
//        return orderDroneService.edit(id, orderDroneEdited);
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
//        LOG.info("method: deleteById. Deleting order drone about id {}", id);
//        orderDroneService.deleteById(id);
//        return "Remove drone about id: " + id;
//    }

//    @GetMapping("/orders")
//    public List<OrderDrone> getOrders(){
//        return orderDroneService.orders();
//    }
}
