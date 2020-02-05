package pl.tom.apiservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.service.ProductService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

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

    @PostMapping("/create")
    public Product create(@RequestBody Product product, HttpServletResponse response){
        LOG.info("method: create. Creating new product");
        return productService.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response){
        LOG.info("method: deleteById. Deleting product about id {}", id);
        productService.deleteById(id);
        response.setStatus(200);
    }
}
