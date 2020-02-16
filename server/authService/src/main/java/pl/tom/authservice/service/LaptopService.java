package pl.tom.authservice.service;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.Laptop;
import pl.tom.authservice.model.LaptopRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LaptopService {

    private LaptopRepository laptopRepository;

    public LaptopService(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    public List<Laptop> getByDescription(String query) {
        List<Laptop> allLaptops = laptopRepository.findAll();

        return allLaptops.stream().filter(laptop -> laptop.getLaptop_description().contains(query)).collect(Collectors.toList());
    }

    public Optional<Laptop> getById(Long id) {
        return laptopRepository.findById(id);
    }

    public List<Laptop> getAll() {
        return laptopRepository.findAll();
    }

}
