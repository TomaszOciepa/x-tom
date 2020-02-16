package pl.tom.authservice.service;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.Drone;
import pl.tom.authservice.model.DroneRepository;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DroneService {

    private DroneRepository droneRepository;

    public DroneService(DroneRepository droneRepository) {
        this.droneRepository = droneRepository;
    }

    public List<Drone> getByDescription(String query) {
        List<Drone> allDrones = droneRepository.findAll();

        return allDrones.stream().filter(drone -> drone.getDrone_description().contains(query)).collect(Collectors.toList());
    }

    public Optional<Drone> getById(Long id) {
        return droneRepository.findById(id);
    }

    public List<Drone> getAll() {
        return droneRepository.findAll();
    }
}
