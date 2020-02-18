package pl.tom.apiservice.api.laptop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.laptop.Laptop;
import pl.tom.apiservice.service.laptop.LaptopService;

import javax.servlet.http.HttpServletResponse;
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

    @PostMapping("/create")
    public Laptop create(@RequestBody Laptop laptop, HttpServletResponse response) {
        LOG.info("method: create. Add new laptop to database");
        return laptopService.save(laptop);
    }

    @PutMapping("/{id}")
    public Optional<Laptop> edit(@PathVariable(value = "id") Long id, @RequestBody Laptop laptopEdited, HttpServletResponse response) {
        LOG.info("method: edit. Edit laptop");
        return laptopService.edit(id, laptopEdited);
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteById. Deleting laptop about id {}", id);
        laptopService.deleteById(id);
        return "Remove laptop about id: " + id;
    }
}

