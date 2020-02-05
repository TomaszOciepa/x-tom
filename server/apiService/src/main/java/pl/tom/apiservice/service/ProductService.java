package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.Product;
import pl.tom.apiservice.model.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll(){
        return repo.findAll();
    }

    public Optional<Product> getProductById(Long id){
        return repo.findById(id);
    }

    public Product save(Product product){
        return repo.save(product);
    }

    public void deleteById(Long id){
        repo.deleteById(id);
    }
}
