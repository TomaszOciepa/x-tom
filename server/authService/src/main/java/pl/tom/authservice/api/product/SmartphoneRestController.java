package pl.tom.authservice.api.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.product.Smartphone;
import pl.tom.authservice.service.product.SmartphoneService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/smartphone")
public class SmartphoneRestController {

    private static final Logger LOG = LoggerFactory.getLogger(SmartphoneRestController.class);

    private SmartphoneService smartphoneService;

    @Autowired
    public SmartphoneRestController(SmartphoneService smartphoneService) {
        this.smartphoneService = smartphoneService;
    }

    @GetMapping("/all")
    public List<Smartphone> getAll(HttpServletResponse response) {
        LOG.info("method: getAll. Trying get all smartphone");
        response.setStatus(200);
        return smartphoneService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Smartphone> getById(@PathVariable(value = "id") Long id, HttpServletResponse response){
        LOG.info("method: getById. Trying get Smartphone with {}", id);
        response.setStatus(200);
        return smartphoneService.getById(id);
    }

    @GetMapping("")
    public List<Smartphone> getByDescription(@RequestParam String query, HttpServletResponse response){
        LOG.info("method: getByDescription. Trying get Smartphone with {} description", query);
        response.setStatus(200);
        return smartphoneService.getByDescription(query);
    }
}
