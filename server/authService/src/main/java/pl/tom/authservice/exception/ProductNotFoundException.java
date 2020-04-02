package pl.tom.authservice.exception;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException() {
        super("Could not find products. The database is empty");
    }

    public ProductNotFoundException(String status) {
        super("Could not found product by status or type: "+status);
    }

    public ProductNotFoundException(Long id) {
        super("Could not found product by id: "+id);
    }
}
