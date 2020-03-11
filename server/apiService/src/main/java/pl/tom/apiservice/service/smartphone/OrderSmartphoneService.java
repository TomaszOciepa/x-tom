package pl.tom.apiservice.service.smartphone;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.smartphone.OrderSmartphone;
import pl.tom.apiservice.model.smartphone.OrderSmartphoneRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OrderSmartphoneService {

//    private OrderSmartphoneRepository orderSmartphoneRepository;
//
//    public OrderSmartphoneService(OrderSmartphoneRepository orderSmartphoneRepository) {
//        this.orderSmartphoneRepository = orderSmartphoneRepository;
//    }
//
//    public List<OrderSmartphone> getAll() {
//        return orderSmartphoneRepository.findAll();
//    }
//
//    public Optional<OrderSmartphone> getById(Long id) {
//        return orderSmartphoneRepository.findById(id);
//    }
//
//    public OrderSmartphone save(OrderSmartphone orderSmartphone) {
//        return orderSmartphoneRepository.save(orderSmartphone);
//    }
//
//    public Optional<OrderSmartphone> edit(Long id, OrderSmartphone orderSmartphoneEdited) {
//        Optional<OrderSmartphone> updateOrderSmartphone = orderSmartphoneRepository.findById(id);
//
//        if (updateOrderSmartphone.isPresent()) {
//            updateOrderSmartphone.get().setOrder_smartphone_date(orderSmartphoneEdited.getOrder_smartphone_date());
//            updateOrderSmartphone.get().setOrder_smartphone_amount(orderSmartphoneEdited.getOrder_smartphone_amount());
//            updateOrderSmartphone.get().setOrder_smartphone_status(orderSmartphoneEdited.getOrder_smartphone_status());
//            return updateOrderSmartphone = Optional.of(orderSmartphoneRepository.save(updateOrderSmartphone.get()));
//
//        } else {
//            return updateOrderSmartphone;
//        }
//    }
//
//    public void deleteById(Long id) {
//        orderSmartphoneRepository.deleteById(id);
//    }
//
//    public List<OrderSmartphone> orders() {
//        return orderSmartphoneRepository.getSmartphoneOrders();
//    }
}
