package pl.tom.testdbjava.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.testdbjava.model.Product;
import pl.tom.testdbjava.model.ProductRepo;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductRestController {

    private ProductRepo productRepo;

    @Autowired
    public ProductRestController(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @GetMapping("/all")
    public List<Product> getAll(){
        return productRepo.findAll();
    }
}
