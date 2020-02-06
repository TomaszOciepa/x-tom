package pl.tom.authservice.service;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.Product;
import pl.tom.authservice.model.ProductRepository;

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

}