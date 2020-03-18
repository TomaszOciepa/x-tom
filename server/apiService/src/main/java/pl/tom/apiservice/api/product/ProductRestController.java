package pl.tom.apiservice.api.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.product.Product;
import pl.tom.apiservice.service.ProductService;

import javax.servlet.http.HttpServletResponse;

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

    @PostMapping("/create")
    public Product create(@RequestBody Product product, HttpServletResponse response) {
        LOG.info("method: create. Creating new product");
        return productService.save(product);
    }

    @PutMapping("/{id}")
    public String edit(@PathVariable(value = "id") Long id, @RequestBody Product productEdited, HttpServletResponse response) {
        LOG.info("method: edit. Add new dron to database");

        return productService.edit(id, productEdited);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteById. Deleting product about id {}", id);
        productService.deleteById(id);
    }
}
