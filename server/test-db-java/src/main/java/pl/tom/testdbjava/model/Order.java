package pl.tom.testdbjava.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ORDERS_PRODUCTS")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_id;
    private LocalDateTime order_time;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;


    public Order() {
    }

    public Order(LocalDateTime order_time, User user, Product product) {
        this.order_time = order_time;
        this.user = user;
        this.product = product;
    }

    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public LocalDateTime getOrder_time() {
        return order_time;
    }

    public void setOrder_time(LocalDateTime order_time) {
        this.order_time = order_time;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "Order{" +
                "order_id=" + order_id +
                ", order_time=" + order_time +
                ", user=" + user +
                ", product=" + product +
                '}';
    }
}
