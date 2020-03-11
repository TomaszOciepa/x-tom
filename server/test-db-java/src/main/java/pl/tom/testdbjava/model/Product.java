package pl.tom.testdbjava.model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;
    private String product_mark;
    private String product_category;
    private double product_price;
    private int product_time_work;
    private int product_range;
    private String product_camera;
    private String product_system;
    private String product_processor;
    private double product_ram_size;
    private String product_disc_type;


    @OneToMany(mappedBy = "product")
    Set<Order> order;

    public Product() {
    }

    public Product(String product_mark, String product_category, double product_price, int product_time_work, int product_range, String product_camera, String product_system, String product_processor, double product_ram_size, String product_disc_type) {
        this.product_mark = product_mark;
        this.product_category = product_category;
        this.product_price = product_price;
        this.product_time_work = product_time_work;
        this.product_range = product_range;
        this.product_camera = product_camera;
        this.product_system = product_system;
        this.product_processor = product_processor;
        this.product_ram_size = product_ram_size;
        this.product_disc_type = product_disc_type;
    }


    public Product(String product_mark, String product_category, double product_price, String product_camera, String product_system, String product_processor, double product_ram_size, String product_disc_type) {
        this.product_mark = product_mark;
        this.product_category = product_category;
        this.product_price = product_price;
        this.product_camera = product_camera;
        this.product_system = product_system;
        this.product_processor = product_processor;
        this.product_ram_size = product_ram_size;
        this.product_disc_type = product_disc_type;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public String getProduct_mark() {
        return product_mark;
    }

    public void setProduct_mark(String product_mark) {
        this.product_mark = product_mark;
    }

    public String getProduct_category() {
        return product_category;
    }

    public void setProduct_category(String product_category) {
        this.product_category = product_category;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(double product_price) {
        this.product_price = product_price;
    }

    public int getProduct_time_work() {
        return product_time_work;
    }

    public void setProduct_time_work(int product_time_work) {
        this.product_time_work = product_time_work;
    }

    public int getProduct_range() {
        return product_range;
    }

    public void setProduct_range(int product_range) {
        this.product_range = product_range;
    }

    public String getProduct_camera() {
        return product_camera;
    }

    public void setProduct_camera(String product_camera) {
        this.product_camera = product_camera;
    }

    public String getProduct_system() {
        return product_system;
    }

    public void setProduct_system(String product_system) {
        this.product_system = product_system;
    }

    public String getProduct_processor() {
        return product_processor;
    }

    public void setProduct_processor(String product_processor) {
        this.product_processor = product_processor;
    }

    public double getProduct_ram_size() {
        return product_ram_size;
    }

    public void setProduct_ram_size(double product_ram_size) {
        this.product_ram_size = product_ram_size;
    }

    public String getProduct_disc_type() {
        return product_disc_type;
    }

    public void setProduct_disc_type(String product_disc_type) {
        this.product_disc_type = product_disc_type;
    }

    @Override
    public String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", product_mark='" + product_mark + '\'' +
                ", product_category='" + product_category + '\'' +
                ", product_price=" + product_price +
                ", product_time_work=" + product_time_work +
                ", product_range=" + product_range +
                ", product_camera='" + product_camera + '\'' +
                ", product_system='" + product_system + '\'' +
                ", product_processor='" + product_processor + '\'' +
                ", product_ram_size=" + product_ram_size +
                ", product_disc_type='" + product_disc_type + '\'' +
                '}';
    }
}
