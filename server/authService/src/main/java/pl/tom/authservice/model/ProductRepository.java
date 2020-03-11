package pl.tom.authservice.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {


    @Query("SELECT p FROM Product p where p.product_type =  ?1")
    List<Product> getProductByType(String type);
}

