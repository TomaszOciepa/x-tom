package pl.tom.apiservice.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ORDER_DRONE")
public class OrderDrone {

    @Id
    @GeneratedValue
    private Long order_drone_id;
    private LocalDateTime order_drone_date;
    private int order_drone_amount;
    private String order_drone_status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "drone_id")
    Drone drone;

    public OrderDrone() {
    }

    public OrderDrone(LocalDateTime order_drone_date, int order_drone_amount, String order_drone_status, User user, Drone drone) {
        this.order_drone_date = order_drone_date;
        this.order_drone_amount = order_drone_amount;
        this.order_drone_status = order_drone_status;
        this.user = user;
        this.drone = drone;
    }

    public Long getOrder_drone_id() {
        return order_drone_id;
    }

    public void setOrder_drone_id(Long order_drone_id) {
        this.order_drone_id = order_drone_id;
    }

    public LocalDateTime getOrder_drone_date() {
        return order_drone_date;
    }

    public void setOrder_drone_date(LocalDateTime order_drone_date) {
        this.order_drone_date = order_drone_date;
    }

    public int getOrder_drone_amount() {
        return order_drone_amount;
    }

    public void setOrder_drone_amount(int order_drone_amount) {
        this.order_drone_amount = order_drone_amount;
    }

    public String getOrder_drone_status() {
        return order_drone_status;
    }

    public void setOrder_drone_status(String order_drone_status) {
        this.order_drone_status = order_drone_status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Drone getDrone() {
        return drone;
    }

    public void setDrone(Drone drone) {
        this.drone = drone;
    }

    @Override
    public String toString() {
        return "OrderDrone{" +
                "order_drone_id=" + order_drone_id +
                ", order_drone_date=" + order_drone_date +
                ", order_drone_amount=" + order_drone_amount +
                ", order_drone_status='" + order_drone_status + '\'' +
                ", user=" + user +
                ", drone=" + drone +
                '}';
    }
}
