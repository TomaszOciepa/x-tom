package pl.tom.apiservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.Smartphone;
import pl.tom.apiservice.service.SmartphoneService;

import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/product/smartphone")
public class SmartphoneRestController {

    private static final Logger LOG = LoggerFactory.getLogger(SmartphoneRestController.class);

    private SmartphoneService smartphoneService;

    @Autowired
    public SmartphoneRestController(SmartphoneService smartphoneService) {
        this.smartphoneService = smartphoneService;
    }

    @PostMapping("/create")
    public Smartphone create(@RequestBody Smartphone smartphone, HttpServletResponse response) {
        LOG.info("method: create. Add new smartphone to database");
        return smartphoneService.save(smartphone);
    }

    @PutMapping("/{id}")
    public Optional<Smartphone> edit(@PathVariable(value = "id") Long id, @RequestBody Smartphone smartphoneEdited, HttpServletResponse response) {
        LOG.info("method: edit. Add new smartphone to database");
        return smartphoneService.edit(id, smartphoneEdited);
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteById. Deleting smartphone about id {}", id);
        smartphoneService.deleteById(id);
        return "Remove smartphone about id: " + id;
    }
}

