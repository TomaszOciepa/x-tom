package pl.tom.authservice.service.product;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.product.Smartphone;
import pl.tom.authservice.model.product.SmartphoneRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SmartphoneService {

    private SmartphoneRepository smartphoneRepository;

    public SmartphoneService(SmartphoneRepository smartphoneRepository) {
        this.smartphoneRepository = smartphoneRepository;
    }

    public List<Smartphone> getByDescription(String query) {
        List<Smartphone> allSmartphone = smartphoneRepository.findAll();

        return allSmartphone.stream().filter(smartphone -> smartphone.getSmartphone_description().contains(query)).collect(Collectors.toList());
    }

    public Optional<Smartphone> getById(Long id) {
        return smartphoneRepository.findById(id);
    }

    public List<Smartphone> getAll() {
        return smartphoneRepository.findAll();
    }
}
