package pl.tom.apiservice.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="LAPTOP")
public class Laptop {

    @Id
    @GeneratedValue
    private Long laptop_id;
    private String laptop_mark;
    private String laptop_description;
    private double laptop_price;
    private String laptop_status;
    private String laptop_system;
    private String laptop_processor;
    private double laptop_ram_size;
    private String laptop_disc_type;
    private double laptop_disc_size;
    private String laptop_graphics_card;
    private double laptop_screen_diagonal;
    private int laptop_amount_available;
    @OneToMany(mappedBy = "laptop")
    Set<OrderLaptop> orderLaptops;


    public Laptop() {
    }

    public Laptop(String laptop_mark, String laptop_description, double laptop_price, String laptop_status, String laptop_system, String laptop_processor, double laptop_ram_size, String laptop_disc_type, double laptop_disc_size, String laptop_graphics_card, double laptop_screen_diagonal, int laptop_amount_available) {
        this.laptop_mark = laptop_mark;
        this.laptop_description = laptop_description;
        this.laptop_price = laptop_price;
        this.laptop_status = laptop_status;
        this.laptop_system = laptop_system;
        this.laptop_processor = laptop_processor;
        this.laptop_ram_size = laptop_ram_size;
        this.laptop_disc_type = laptop_disc_type;
        this.laptop_disc_size = laptop_disc_size;
        this.laptop_graphics_card = laptop_graphics_card;
        this.laptop_screen_diagonal = laptop_screen_diagonal;
        this.laptop_amount_available = laptop_amount_available;
    }

    public Laptop(String laptop_mark, String laptop_description, double laptop_price, String laptop_status, String laptop_system, String laptop_processor, double laptop_ram_size, String laptop_disc_type, double laptop_disc_size, String laptop_graphics_card, double laptop_screen_diagonal, int laptop_amount_available, Set<OrderLaptop> orderLaptops) {
        this.laptop_mark = laptop_mark;
        this.laptop_description = laptop_description;
        this.laptop_price = laptop_price;
        this.laptop_status = laptop_status;
        this.laptop_system = laptop_system;
        this.laptop_processor = laptop_processor;
        this.laptop_ram_size = laptop_ram_size;
        this.laptop_disc_type = laptop_disc_type;
        this.laptop_disc_size = laptop_disc_size;
        this.laptop_graphics_card = laptop_graphics_card;
        this.laptop_screen_diagonal = laptop_screen_diagonal;
        this.laptop_amount_available = laptop_amount_available;
        this.orderLaptops = orderLaptops;
    }

    public Long getLaptop_id() {
        return laptop_id;
    }

    public void setLaptop_id(Long laptop_id) {
        this.laptop_id = laptop_id;
    }

    public String getLaptop_mark() {
        return laptop_mark;
    }

    public void setLaptop_mark(String laptop_mark) {
        this.laptop_mark = laptop_mark;
    }

    public double getLaptop_price() {
        return laptop_price;
    }

    public void setLaptop_price(double laptop_price) {
        this.laptop_price = laptop_price;
    }

    public String getLaptop_status() {
        return laptop_status;
    }

    public void setLaptop_status(String laptop_status) {
        this.laptop_status = laptop_status;
    }

    public String getLaptop_system() {
        return laptop_system;
    }

    public void setLaptop_system(String laptop_system) {
        this.laptop_system = laptop_system;
    }

    public String getLaptop_processor() {
        return laptop_processor;
    }

    public void setLaptop_processor(String laptop_processor) {
        this.laptop_processor = laptop_processor;
    }

    public double getLaptop_ram_size() {
        return laptop_ram_size;
    }

    public void setLaptop_ram_size(double laptop_ram_size) {
        this.laptop_ram_size = laptop_ram_size;
    }

    public String getLaptop_disc_type() {
        return laptop_disc_type;
    }

    public void setLaptop_disc_type(String laptop_disc_type) {
        this.laptop_disc_type = laptop_disc_type;
    }

    public double getLaptop_disc_size() {
        return laptop_disc_size;
    }

    public void setLaptop_disc_size(double laptop_disc_size) {
        this.laptop_disc_size = laptop_disc_size;
    }

    public String getLaptop_graphics_card() {
        return laptop_graphics_card;
    }

    public void setLaptop_graphics_card(String laptop_graphics_card) {
        this.laptop_graphics_card = laptop_graphics_card;
    }

    public double getLaptop_screen_diagonal() {
        return laptop_screen_diagonal;
    }

    public void setLaptop_screen_diagonal(double laptop_screen_diagonal) {
        this.laptop_screen_diagonal = laptop_screen_diagonal;
    }

    public int getLaptop_amount_available() {
        return laptop_amount_available;
    }

    public void setLaptop_amount_available(int laptop_amount_available) {
        this.laptop_amount_available = laptop_amount_available;
    }

    public Set<OrderLaptop> getOrderLaptops() {
        return orderLaptops;
    }

    public void setOrderLaptops(Set<OrderLaptop> orderLaptops) {
        this.orderLaptops = orderLaptops;
    }

    public String getLaptop_description() {
        return laptop_description;
    }

    public void setLaptop_description(String laptop_description) {
        this.laptop_description = laptop_description;
    }

    @Override
    public String toString() {
        return "Laptop{" +
                "laptop_id=" + laptop_id +
                ", laptop_mark='" + laptop_mark + '\'' +
                ", laptop_description='" + laptop_description + '\'' +
                ", laptop_price=" + laptop_price +
                ", laptop_status='" + laptop_status + '\'' +
                ", laptop_system='" + laptop_system + '\'' +
                ", laptop_processor='" + laptop_processor + '\'' +
                ", laptop_ram_size=" + laptop_ram_size +
                ", laptop_disc_type='" + laptop_disc_type + '\'' +
                ", laptop_disc_size=" + laptop_disc_size +
                ", laptop_graphics_card='" + laptop_graphics_card + '\'' +
                ", laptop_screen_diagonal=" + laptop_screen_diagonal +
                ", laptop_amount_available=" + laptop_amount_available +
                ", orderLaptops=" + orderLaptops +
                '}';
    }
}

