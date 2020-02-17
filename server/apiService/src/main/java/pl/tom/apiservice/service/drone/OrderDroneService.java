package pl.tom.apiservice.service.drone;


import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.drone.OrderDrone;
import pl.tom.apiservice.model.drone.OrderDroneRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDroneService {

    private OrderDroneRepository orderDroneRepository;

    public OrderDroneService(OrderDroneRepository orderDroneRepository) {
        this.orderDroneRepository = orderDroneRepository;
    }


    public List<OrderDrone> getAll() {
        return orderDroneRepository.findAll();
    }

    public Optional<OrderDrone> getById(Long id) {
        return orderDroneRepository.findById(id);
    }

    public OrderDrone save(OrderDrone orderDrone) {
        return orderDroneRepository.save(orderDrone);
    }

    public Optional<OrderDrone> edit(Long id, OrderDrone orderDroneEdited) {
                Optional<OrderDrone> updateOrderDrone = orderDroneRepository.findById(id);

        if (updateOrderDrone.isPresent()){
                updateOrderDrone.get().setOrder_drone_date(orderDroneEdited.getOrder_drone_date());
                updateOrderDrone.get().setOrder_drone_amount(orderDroneEdited.getOrder_drone_amount());
                updateOrderDrone.get().setOrder_drone_status(orderDroneEdited.getOrder_drone_status());
                return updateOrderDrone = Optional.of(orderDroneRepository.save(updateOrderDrone.get()));

        }else {
            return updateOrderDrone;
        }
    }

    public void deleteById(Long id) {
        orderDroneRepository.deleteById(id);
    }

    public List<OrderDrone> orders(){
        return orderDroneRepository.getDronesOrders();
    }
}
