package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.Product;
import pl.tom.authservice.service.ProductService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductRestController {

    private static final Logger LOG = LoggerFactory.getLogger(ProductRestController.class);
    private ProductService productService;

    @Autowired
    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public List<Product> getAll(HttpServletResponse response){
        LOG.info("method: getAll. Trying get all products");
        response.setStatus(200);
        return productService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getById(@PathVariable(value = "id") Long id, HttpServletResponse response){
        LOG.info("method: getById. Trying get product with {}", id);
        response.setStatus(200);
        return productService.getProductById(id);
    }

    @GetMapping("/type")
    public List<Product> getByType(@RequestParam String type, HttpServletResponse response){
        LOG.info("method: getByType(). Trying get products with type {}", type);
        return productService.getProductByType(type);
    }

    @GetMapping("/status")
    public List<Product> getByStatus(@RequestParam String status, HttpServletResponse response){
        LOG.info("method: getByStatus(). Trying get products with status {}", status);
        return productService.getProductByStatus(status);
    }


//    @GetMapping("")
//    public List<Product> getByDescription(@RequestParam String query, HttpServletResponse response){
//        LOG.info("method: getByDescription. Trying get product with {} description", query);
//        response.setStatus(200);
//        return productService.getByDescription(query);
//    }

}
