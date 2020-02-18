package pl.tom.apiservice.service.laptop;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.laptop.OrderLaptop;
import pl.tom.apiservice.model.laptop.OrderLaptopRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OrderLaptopService {

    private OrderLaptopRepository orderLaptopRepository;

    public OrderLaptopService(OrderLaptopRepository orderLaptopRepository) {
        this.orderLaptopRepository = orderLaptopRepository;
    }

    public List<OrderLaptop> getAll() {
        return orderLaptopRepository.findAll();
    }

    public Optional<OrderLaptop> getById(Long id) {
        return orderLaptopRepository.findById(id);
    }


    public OrderLaptop save(OrderLaptop orderLaptop) {
        return orderLaptopRepository.save(orderLaptop);
    }

    public Optional<OrderLaptop> edit(Long id, OrderLaptop orderLaptopEdited) {

        Optional<OrderLaptop> updateOrderLaptop = orderLaptopRepository.findById(id);

        if (updateOrderLaptop.isPresent()){
            updateOrderLaptop.get().setOrder_laptop_date(orderLaptopEdited.getOrder_laptop_date());
            updateOrderLaptop.get().setOrder_laptop_amount(orderLaptopEdited.getOrder_laptop_amount());
            updateOrderLaptop.get().setOrder_laptop_status(orderLaptopEdited.getOrder_laptop_status());
            return updateOrderLaptop = Optional.of(orderLaptopRepository.save(updateOrderLaptop.get()));

        }else {
            return updateOrderLaptop;
        }
    }

    public void deleteById(Long id) {
        orderLaptopRepository.deleteById(id);
    }

    public List<OrderLaptop> orders() {
        return orderLaptopRepository.getLaptopOrders();
    }
}
