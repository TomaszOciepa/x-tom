package pl.tom.apiservice.model.laptop;

import pl.tom.apiservice.model.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="ORDER_LAPTOP")
public class OrderLaptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_laptop_id;
    private LocalDateTime order_laptop_date;
    private int order_laptop_amount;
    private String order_laptop_status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "laptop_id")
    private Laptop laptop;

    public OrderLaptop() {
    }

    public OrderLaptop(LocalDateTime order_laptop_date, int order_laptop_amount, String order_laptop_status, User user, Laptop laptop) {
        this.order_laptop_date = order_laptop_date;
        this.order_laptop_amount = order_laptop_amount;
        this.order_laptop_status = order_laptop_status;
        this.user = user;
        this.laptop = laptop;
    }

    public Long getOrder_laptop_id() {
        return order_laptop_id;
    }

    public void setOrder_laptop_id(Long order_laptop_id) {
        this.order_laptop_id = order_laptop_id;
    }

    public LocalDateTime getOrder_laptop_date() {
        return order_laptop_date;
    }

    public void setOrder_laptop_date(LocalDateTime order_laptop_date) {
        this.order_laptop_date = order_laptop_date;
    }

    public int getOrder_laptop_amount() {
        return order_laptop_amount;
    }

    public void setOrder_laptop_amount(int order_laptop_amount) {
        this.order_laptop_amount = order_laptop_amount;
    }

    public String getOrder_laptop_status() {
        return order_laptop_status;
    }

    public void setOrder_laptop_status(String order_laptop_status) {
        this.order_laptop_status = order_laptop_status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Laptop getLaptop() {
        return laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }

    @Override
    public String toString() {
        return "OrderLaptop{" +
                "order_laptop_id=" + order_laptop_id +
                ", order_laptop_date=" + order_laptop_date +
                ", order_laptop_amount=" + order_laptop_amount +
                ", order_laptop_status='" + order_laptop_status + '\'' +
                '}';
    }
}
