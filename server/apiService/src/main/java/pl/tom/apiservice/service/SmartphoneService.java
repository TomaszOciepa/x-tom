package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Smartphone;
import pl.tom.apiservice.model.SmartphoneRepository;

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

    public Smartphone save(Smartphone smartphone) {
        smartphone.setSmartphone_description(smartphone.getSmartphone_description().toLowerCase());
        return smartphoneRepository.save(smartphone);
    }


    public Optional<Smartphone> edit(Long id, Smartphone smartphoneEdited) {
        Optional<Smartphone> updateSmartphone = smartphoneRepository.findById(id);

        if (updateSmartphone.isPresent()) {
            updateSmartphone.get().setSmartphone_mark(smartphoneEdited.getSmartphone_mark());
            updateSmartphone.get().setSmartphone_description(smartphoneEdited.getSmartphone_description().toLowerCase());
            updateSmartphone.get().setSmartphone_price(smartphoneEdited.getSmartphone_price());
            updateSmartphone.get().setSmartphone_status(smartphoneEdited.getSmartphone_status());
            updateSmartphone.get().setSmartphone_system(smartphoneEdited.getSmartphone_system());
            updateSmartphone.get().setSmartphone_screen_diagonal(smartphoneEdited.getSmartphone_screen_diagonal());
            updateSmartphone.get().setSmartphone_disc_size(smartphoneEdited.getSmartphone_disc_size());
            updateSmartphone.get().setSmartphone_ram_size(smartphoneEdited.getSmartphone_ram_size());
            updateSmartphone.get().setSmartphone_camera_resolution(smartphoneEdited.getSmartphone_camera_resolution());
            updateSmartphone.get().setSmartphone_amount_available(smartphoneEdited.getSmartphone_amount_available());

            return updateSmartphone = Optional.of(smartphoneRepository.save(updateSmartphone.get()));

        } else {
            return updateSmartphone;
        }
    }

    public void deleteById(Long id) {
        smartphoneRepository.deleteById(id);
    }
}

