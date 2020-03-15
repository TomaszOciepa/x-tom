package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.product.Product;
import pl.tom.apiservice.model.product.ProductRepository;

import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    public ProductService(ProductRepository repo) {
        this.productRepository = repo;
    }

    public Product save(Product product){
        product.setProduct_type(product.getProduct_type().toLowerCase());
        product.setProduct_mark(product.getProduct_mark().toLowerCase());
        product.setProduct_status(product.getProduct_status().toLowerCase());
        product.setProduct_description(product.getProduct_description().toLowerCase());
        product.setProduct_processor(product.getProduct_processor().toLowerCase());
        product.setProduct_system(product.getProduct_system().toLowerCase());
        product.setProduct_camera(product.getProduct_camera().toLowerCase());
        product.setProduct_disc_type(product.getProduct_disc_type().toLowerCase());
        product.setProduct_graphics_card(product.getProduct_graphics_card().toLowerCase());

        return productRepository.save(product);
    }

    public String edit(Long id, Product editedProduct){
        Optional<Product> product = productRepository.findById(id);

        if (product.isPresent()){
            product.get().setProduct_mark(editedProduct.getProduct_mark().toLowerCase());
            product.get().setProduct_status(editedProduct.getProduct_status().toLowerCase());
            product.get().setProduct_description(editedProduct.getProduct_description().toLowerCase());
            product.get().setProduct_processor(editedProduct.getProduct_processor().toLowerCase());
            product.get().setProduct_system(editedProduct.getProduct_system().toLowerCase());
            product.get().setProduct_camera(editedProduct.getProduct_camera().toLowerCase());
            product.get().setProduct_disc_type(editedProduct.getProduct_disc_type().toLowerCase());
            product.get().setProduct_graphics_card(editedProduct.getProduct_graphics_card().toLowerCase());

            product.get().setProduct_price(editedProduct.getProduct_price());
            product.get().setProduct_ram_size(editedProduct.getProduct_ram_size());
            product.get().setProduct_disc_size(editedProduct.getProduct_disc_size());
            product.get().setProduct_screen_diagonal(editedProduct.getProduct_screen_diagonal());
            product.get().setProduct_amount_available(editedProduct.getProduct_amount_available());
            product.get().setProduct_camera_resolution(editedProduct.getProduct_camera_resolution());
            product.get().setProduct_time_work(editedProduct.getProduct_time_work());
            product.get().setProduct_range(editedProduct.getProduct_range());

            productRepository.save(product.get());
            return "updated";
        }else {
            return "not found";
        }
    }

    public void deleteById(Long id){
        productRepository.deleteById(id);
    }
}
