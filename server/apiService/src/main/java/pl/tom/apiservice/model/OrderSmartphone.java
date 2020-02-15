package pl.tom.apiservice.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="ORDER_SMARTPHONE")
public class OrderSmartphone {

    @Id
    @GeneratedValue
    private Long order_smartphone_id;
    private LocalDateTime order_smartphone_date;
    private int order_smartphone_amount;
    private String order_smartphone_status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "smartphone_id")
    Smartphone smartphone;

    public OrderSmartphone() {
    }

    public OrderSmartphone(LocalDateTime order_smartphone_date, int order_smartphone_amount, String order_smartphone_status, User user, Smartphone smartphone) {
        this.order_smartphone_date = order_smartphone_date;
        this.order_smartphone_amount = order_smartphone_amount;
        this.order_smartphone_status = order_smartphone_status;
        this.user = user;
        this.smartphone = smartphone;
    }

    public Long getOrder_smartphone_id() {
        return order_smartphone_id;
    }

    public void setOrder_smartphone_id(Long order_smartphone_id) {
        this.order_smartphone_id = order_smartphone_id;
    }

    public LocalDateTime getOrder_smartphone_date() {
        return order_smartphone_date;
    }

    public void setOrder_smartphone_date(LocalDateTime order_smartphone_date) {
        this.order_smartphone_date = order_smartphone_date;
    }

    public int getOrder_smartphone_amount() {
        return order_smartphone_amount;
    }

    public void setOrder_smartphone_amount(int order_smartphone_amount) {
        this.order_smartphone_amount = order_smartphone_amount;
    }

    public String getOrder_smartphone_status() {
        return order_smartphone_status;
    }

    public void setOrder_smartphone_status(String order_smartphone_status) {
        this.order_smartphone_status = order_smartphone_status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Smartphone getSmartphone() {
        return smartphone;
    }

    public void setSmartphone(Smartphone smartphone) {
        this.smartphone = smartphone;
    }

    @Override
    public String toString() {
        return "OrderSmartphone{" +
                "order_smartphone_id=" + order_smartphone_id +
                ", order_smartphone_date=" + order_smartphone_date +
                ", order_smartphone_amount=" + order_smartphone_amount +
                ", order_smartphone_status='" + order_smartphone_status + '\'' +
                ", user=" + user +
                ", smartphone=" + smartphone +
                '}';
    }
}
