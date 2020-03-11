package pl.tom.apiservice.api.drone;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.drone.Drone;
import pl.tom.apiservice.service.drone.DroneService;

import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/drone")
public class DroneRestController {

//    private static final Logger LOG = LoggerFactory.getLogger(DroneRestController.class);
//
//    private DroneService droneService;
//
//    @Autowired
//    public DroneRestController(DroneService droneService) {
//        this.droneService = droneService;
//    }
//
//    @PostMapping("/create")
//    public Drone create(@RequestBody Drone drone, HttpServletResponse response) {
//        LOG.info("method: create. Add new dron to database");
//        return droneService.save(drone);
//    }
//
//    @PutMapping("/{id}")
//    public Optional<Drone> edit(@PathVariable(value = "id") Long id, @RequestBody Drone droneEdited, HttpServletResponse response) {
//        LOG.info("method: edit. Add new dron to database");
//
//        return droneService.edit(id, droneEdited);
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
//        LOG.info("method: deleteById. Deleting drone about id {}", id);
//        droneService.deleteById(id);
//        return "Remove drone about id: " + id;
//    }


}
