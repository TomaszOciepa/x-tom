package pl.tom.apiservice.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="DRONE")
public class Drone {

    @Id
    @GeneratedValue
    private Long drone_id;
    private String drone_mark;
    private String drone_description;
    private double drone_price;
    private String drone_status;
    private int drone_time_work;
    private int drone_range;
    private String drone_camera;
    private int drone_amount_available;
    @OneToMany(mappedBy = "drone")
    Set<OrderDrone> orderDrone;

    public Drone() {
    }

    public Drone(String drone_mark, String drone_description, double drone_price, String drone_status, int drone_time_work, int drone_range, String drone_camera, int drone_amount_available) {
        this.drone_mark = drone_mark;
        this.drone_description = drone_description;
        this.drone_price = drone_price;
        this.drone_status = drone_status;
        this.drone_time_work = drone_time_work;
        this.drone_range = drone_range;
        this.drone_camera = drone_camera;
        this.drone_amount_available = drone_amount_available;
    }

    public Drone(String drone_mark, String drone_description, double drone_price, String drone_status, int drone_time_work, int drone_range, String drone_camera, int drone_amount_available, Set<OrderDrone> orderDrone) {
        this.drone_mark = drone_mark;
        this.drone_description = drone_description;
        this.drone_price = drone_price;
        this.drone_status = drone_status;
        this.drone_time_work = drone_time_work;
        this.drone_range = drone_range;
        this.drone_camera = drone_camera;
        this.drone_amount_available = drone_amount_available;
        this.orderDrone = orderDrone;
    }

    public Long getDrone_id() {
        return drone_id;
    }

    public void setDrone_id(Long drone_id) {
        this.drone_id = drone_id;
    }

    public String getDrone_mark() {
        return drone_mark;
    }

    public void setDrone_mark(String drone_mark) {
        this.drone_mark = drone_mark;
    }

    public double getDrone_price() {
        return drone_price;
    }

    public void setDrone_price(double drone_price) {
        this.drone_price = drone_price;
    }

    public String getDrone_status() {
        return drone_status;
    }

    public void setDrone_status(String drone_status) {
        this.drone_status = drone_status;
    }

    public int getDrone_time_work() {
        return drone_time_work;
    }

    public void setDrone_time_work(int drone_time_work) {
        this.drone_time_work = drone_time_work;
    }

    public int getDrone_range() {
        return drone_range;
    }

    public void setDrone_range(int drone_range) {
        this.drone_range = drone_range;
    }

    public String getDrone_camera() {
        return drone_camera;
    }

    public void setDrone_camera(String drone_camera) {
        this.drone_camera = drone_camera;
    }

    public int getDrone_amount_available() {
        return drone_amount_available;
    }

    public void setDrone_amount_available(int drone_amount_available) {
        this.drone_amount_available = drone_amount_available;
    }

    public Set<OrderDrone> getOrderDrone() {
        return orderDrone;
    }

    public void setOrderDrone(Set<OrderDrone> orderDrone) {
        this.orderDrone = orderDrone;
    }

    public String getDrone_description() {
        return drone_description;
    }

    public void setDrone_description(String drone_description) {
        this.drone_description = drone_description;
    }

    @Override
    public String toString() {
        return "Drone{" +
                "drone_id=" + drone_id +
                ", drone_mark='" + drone_mark + '\'' +
                ", drone_description='" + drone_description + '\'' +
                ", drone_price=" + drone_price +
                ", drone_status='" + drone_status + '\'' +
                ", drone_time_work=" + drone_time_work +
                ", drone_range=" + drone_range +
                ", drone_camera='" + drone_camera + '\'' +
                ", drone_amount_available=" + drone_amount_available +
                ", orderDrone=" + orderDrone +
                '}';
    }
}
