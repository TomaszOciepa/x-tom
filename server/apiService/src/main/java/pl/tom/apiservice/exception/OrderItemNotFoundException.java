package pl.tom.apiservice.exception;

public class OrderItemNotFoundException extends RuntimeException {

    public OrderItemNotFoundException(){
        super("Could not find products. The database is empty");
    }

    public OrderItemNotFoundException(Long id){
        super("Could not find product by id: "+id);
    }

    public OrderItemNotFoundException(int number){
        super("Could not find product by order number: "+number);
    }
}
