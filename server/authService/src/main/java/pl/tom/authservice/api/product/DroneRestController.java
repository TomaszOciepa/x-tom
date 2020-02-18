package pl.tom.authservice.api.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.product.Drone;
import pl.tom.authservice.service.product.DroneService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/drone")
public class DroneRestController {

    private static final Logger LOG = LoggerFactory.getLogger(DroneRestController.class);

    private DroneService droneService;

    @Autowired
    public DroneRestController(DroneService droneService) {
        this.droneService = droneService;
    }

    @GetMapping("/all")
    public List<Drone> getAll(HttpServletResponse response) {
        LOG.info("method: getAll. Trying get all drones");
        response.setStatus(200);
        return droneService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Drone> getById(@PathVariable(value = "id") Long id, HttpServletResponse response){
        LOG.info("method: getById. Trying get drone with {}", id);
        response.setStatus(200);
        return droneService.getById(id);
    }

    @GetMapping("")
    public List<Drone> getByDescription(@RequestParam String query, HttpServletResponse response){
        LOG.info("method: getByDescription. Trying get drone with {} description", query);
        response.setStatus(200);
        return droneService.getByDescription(query);
    }

}
