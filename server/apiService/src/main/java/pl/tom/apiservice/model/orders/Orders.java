package pl.tom.apiservice.model.orders;

import pl.tom.apiservice.model.product.Product;
import pl.tom.apiservice.model.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ORDERS")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orders_id;
    private LocalDateTime orders_date_time;
    private String orders_status;
    private int orders_amount;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Orders() {
    }

    public Orders(LocalDateTime orders_date_time, String orders_status, int orders_amount, User user, Product product) {
        this.orders_date_time = orders_date_time;
        this.orders_status = orders_status;
        this.orders_amount = orders_amount;
        this.user = user;
        this.product = product;
    }

    public Long getOrders_id() {
        return orders_id;
    }

    public void setOrders_id(Long orders_id) {
        this.orders_id = orders_id;
    }

    public LocalDateTime getOrders_date_time() {
        return orders_date_time;
    }

    public void setOrders_date_time(LocalDateTime orders_date_time) {
        this.orders_date_time = orders_date_time;
    }

    public String getOrders_status() {
        return orders_status;
    }

    public void setOrders_status(String orders_status) {
        this.orders_status = orders_status;
    }

    public int getOrders_amount() {
        return orders_amount;
    }

    public void setOrders_amount(int orders_amount) {
        this.orders_amount = orders_amount;
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
        return "Orders{" +
                "orders_id=" + orders_id +
                ", orders_date_time=" + orders_date_time +
                ", orders_status='" + orders_status + '\'' +
                ", orders_amount=" + orders_amount +
                ", user=" + user +
                ", product=" + product +
                '}';
    }
}
