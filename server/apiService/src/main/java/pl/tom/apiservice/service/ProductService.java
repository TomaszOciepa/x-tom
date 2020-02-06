package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.model.ProductRepository;

@Service
public class ProductService {

    private ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public Product save(Product product){
        return repo.save(product);
    }

    public void deleteById(Long id){
        repo.deleteById(id);
    }
}
