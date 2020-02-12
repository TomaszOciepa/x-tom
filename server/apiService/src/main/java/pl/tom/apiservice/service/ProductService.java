package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.model.ProductRepository;

import java.time.LocalDateTime;

@Service
public class ProductService {

    private ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public Product save(Product product){
        product.setDateAdded(LocalDateTime.now());
        return repo.save(product);
    }

    public void deleteById(Long id){
        repo.deleteById(id);
    }
}
