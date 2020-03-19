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
    private double orders_payments_sum;
    private int orders_amount;
    private int orders_number;
    private String orders_status;
    private String orders_delivery_method;
    private String orders_payments_method;
    private LocalDateTime orders_date_time;
    private LocalDateTime orders_date_time_delivery;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Orders() {
    }

    public Orders(double orders_payments_sum, int orders_amount, String orders_status, String orders_delivery_method, String orders_payments_method, LocalDateTime orders_date_time, LocalDateTime orders_date_time_delivery, User user, Product product) {
        this.orders_payments_sum = orders_payments_sum;
        this.orders_amount = orders_amount;
        this.orders_status = orders_status;
        this.orders_delivery_method = orders_delivery_method;
        this.orders_payments_method = orders_payments_method;
        this.orders_date_time = orders_date_time;
        this.orders_date_time_delivery = orders_date_time_delivery;
        this.user = user;
        this.product = product;
    }

    public Orders(double orders_payments_sum, int orders_amount, int orders_number, String orders_status, String orders_delivery_method, String orders_payments_method, LocalDateTime orders_date_time, LocalDateTime orders_date_time_delivery, User user, Product product) {
        this.orders_payments_sum = orders_payments_sum;
        this.orders_amount = orders_amount;
        this.orders_number = orders_number;
        this.orders_status = orders_status;
        this.orders_delivery_method = orders_delivery_method;
        this.orders_payments_method = orders_payments_method;
        this.orders_date_time = orders_date_time;
        this.orders_date_time_delivery = orders_date_time_delivery;
        this.user = user;
        this.product = product;
    }

    public Long getOrders_id() {
        return orders_id;
    }

    public void setOrders_id(Long orders_id) {
        this.orders_id = orders_id;
    }

    public double getOrders_payments_sum() {
        return orders_payments_sum;
    }

    public void setOrders_payments_sum(double orders_payments_sum) {
        this.orders_payments_sum = orders_payments_sum;
    }

    public int getOrders_amount() {
        return orders_amount;
    }

    public void setOrders_amount(int orders_amount) {
        this.orders_amount = orders_amount;
    }

    public int getOrders_number() {
        return orders_number;
    }

    public void setOrders_number(int orders_number) {
        this.orders_number = orders_number;
    }

    public String getOrders_status() {
        return orders_status;
    }

    public void setOrders_status(String orders_status) {
        this.orders_status = orders_status;
    }

    public String getOrders_delivery_method() {
        return orders_delivery_method;
    }

    public void setOrders_delivery_method(String orders_delivery_method) {
        this.orders_delivery_method = orders_delivery_method;
    }

    public String getOrders_payments_method() {
        return orders_payments_method;
    }

    public void setOrders_payments_method(String orders_payments_method) {
        this.orders_payments_method = orders_payments_method;
    }

    public LocalDateTime getOrders_date_time() {
        return orders_date_time;
    }

    public void setOrders_date_time(LocalDateTime orders_date_time) {
        this.orders_date_time = orders_date_time;
    }

    public LocalDateTime getOrders_date_time_delivery() {
        return orders_date_time_delivery;
    }

    public void setOrders_date_time_delivery(LocalDateTime orders_date_time_delivery) {
        this.orders_date_time_delivery = orders_date_time_delivery;
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
                ", orders_payments_sum=" + orders_payments_sum +
                ", orders_amount=" + orders_amount +
                ", orders_number=" + orders_number +
                ", orders_status='" + orders_status + '\'' +
                ", orders_delivery_method='" + orders_delivery_method + '\'' +
                ", orders_payments_method='" + orders_payments_method + '\'' +
                ", orders_date_time=" + orders_date_time +
                ", orders_date_time_delivery=" + orders_date_time_delivery +
                ", user=" + user +
                ", product=" + product +
                '}';
    }
}
