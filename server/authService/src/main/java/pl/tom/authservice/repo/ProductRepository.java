package pl.tom.authservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.tom.authservice.model.product.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p")
    Optional<List<Product>> getAllProducts();

    @Query("SELECT p FROM Product p where p.product_type =  ?1")
    Optional<List<Product>> getProductByType(String type);

    @Query("SELECT p FROM Product p where p.product_status =  ?1")
    Optional<List<Product>> getProductByStatus(String status);
}

