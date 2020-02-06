package pl.tom.apiservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.service.ProductService;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/product")
public class ProductRestController {

    private static final Logger LOG = LoggerFactory.getLogger(ProductRestController.class);
    private ProductService productService;

    @Autowired
    public ProductRestController(ProductService productService) {
        this.productService = productService;
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
