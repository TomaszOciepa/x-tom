package pl.tom.authservice.service;

import org.springframework.stereotype.Service;
import pl.tom.authservice.model.Product;
import pl.tom.authservice.model.ProductRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return repo.findById(id);
    }

    public List<Product> getProductByType(String type) {
        return repo.getProductByType(type);
    }

    public List<Product> getProductByStatus(String status) {
        return repo.getProductByStatus(status);
    }

    public void save_amount_sold_product(Long productId, int orderAmount){
        Optional<Product> product = getProductById(productId);

        int productAmountSold = product.get().getProduct_amount_sold();
        productAmountSold += orderAmount;
        product.get().setProduct_amount_sold(productAmountSold);

        repo.save(product.get());
    }

//    public List<Product> getByDescription(String query) {
//        List<Product> allProducts = repo.findAll();
//
//        return allProducts.stream().filter(product -> product.getDescription().contains(query)).collect(Collectors.toList());
//    }

}
