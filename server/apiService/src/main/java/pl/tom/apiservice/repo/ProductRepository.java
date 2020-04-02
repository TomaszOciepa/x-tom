package pl.tom.apiservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.tom.apiservice.model.product.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
