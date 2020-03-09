package pl.tom.authservice.api.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.product.Drone;
import pl.tom.authservice.model.product.Laptop;
import pl.tom.authservice.service.product.LaptopService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/laptop")
public class LaptopRestController {

    private static final Logger LOG = LoggerFactory.getLogger(LaptopRestController.class);

    private LaptopService laptopService;

    @Autowired
    public LaptopRestController(LaptopService laptopService) {
        this.laptopService = laptopService;
    }

    @GetMapping("/all")
    public List<Laptop> getAll(HttpServletResponse response) {
        LOG.info("method: getAll. Trying get all laptops");
        response.setStatus(200);
        return laptopService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Laptop> getById(@PathVariable(value = "id") Long id, HttpServletResponse response){
        LOG.info("method: getById. Trying get laptop with {}", id);
        response.setStatus(200);
        return laptopService.getById(id);
    }

    @GetMapping("")
    public List<Laptop> getByDescription(@RequestParam String query, HttpServletResponse response){
        LOG.info("method: getByDescription. Trying get laptop with {} description", query);
        response.setStatus(200);
        return laptopService.getByDescription(query);
    }

    @GetMapping("/status")
    public List<Laptop> getByStatus(@RequestParam String status, HttpServletResponse response){
        LOG.info("method: getByStatus. Trying get Laptop with status {}", status);
        return laptopService.getLaptopByStatus(status);
    }
}
