package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Drone;
import pl.tom.apiservice.model.DroneRepository;

import java.util.Optional;

@Service
public class DroneService {

    private DroneRepository droneRepository;

    public DroneService(DroneRepository droneRepository) {
        this.droneRepository = droneRepository;
    }


    public Drone save(Drone drone) {
        drone.setDrone_description(drone.getDrone_description().toLowerCase());
        return droneRepository.save(drone);
    }

    public Optional<Drone> edit(Long id, Drone droneEdited) {

        Optional<Drone> updateDrone = droneRepository.findById(id);

        if (updateDrone.isPresent()){
                updateDrone.get().setDrone_mark(droneEdited.getDrone_mark());
                updateDrone.get().setDrone_description(droneEdited.getDrone_description().toLowerCase());
                updateDrone.get().setDrone_price(droneEdited.getDrone_price());
                updateDrone.get().setDrone_status(droneEdited.getDrone_status());
                updateDrone.get().setDrone_time_work(droneEdited.getDrone_time_work());
                updateDrone.get().setDrone_range(droneEdited.getDrone_range());
                updateDrone.get().setDrone_camera(droneEdited.getDrone_camera());
                updateDrone.get().setDrone_amount_available(droneEdited.getDrone_amount_available());

                return updateDrone = Optional.of(droneRepository.save(updateDrone.get()));

        }else {
            return updateDrone;
        }
    }


    public void deleteById(Long id) {
        droneRepository.deleteById(id);
    }
}
