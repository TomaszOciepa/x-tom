package pl.tom.testdbjava.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.testdbjava.model.Order;
import pl.tom.testdbjava.model.OrderRepo;
import pl.tom.testdbjava.model.Product;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderRestController {

    private OrderRepo orderRepo;

    @Autowired
    public OrderRestController(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @GetMapping("/all")
    public List<Order> getAll(){
        return orderRepo.findAll();
    }
}
