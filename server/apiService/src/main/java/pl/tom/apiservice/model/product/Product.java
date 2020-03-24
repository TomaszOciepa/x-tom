package pl.tom.apiservice.model.product;

import pl.tom.apiservice.model.cart.Cart;
import pl.tom.apiservice.model.order.OrderItem;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name="PRODUCT")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;
    private String product_type;
    private String product_mark;
    private String product_status;
    private String product_description;
    private String product_processor;
    private String product_system;
    private String product_camera;
    private String product_disc_type;
    private String product_graphics_card;
    private double product_price;
    private double product_ram_size;
    private double product_disc_size;
    private double product_screen_diagonal;
    private int product_amount_available;
    private int product_amount_sold;
    private int product_camera_resolution;
    private int product_time_work;
    private int product_range;

    @OneToMany(mappedBy = "product")
    Set<OrderItem> orderItem;

    @OneToMany(mappedBy = "product")
    Set<Cart> cart;

    public Product() {
    }

    public Product(String product_type, String product_mark, String product_status, String product_description, String product_processor, String product_system, String product_camera, String product_disc_type, String product_graphics_card, double product_price, double product_ram_size, double product_disc_size, double product_screen_diagonal, int product_amount_available, int product_amount_sold, int product_camera_resolution, int product_time_work, int product_range) {
        this.product_type = product_type;
        this.product_mark = product_mark;
        this.product_status = product_status;
        this.product_description = product_description;
        this.product_processor = product_processor;
        this.product_system = product_system;
        this.product_camera = product_camera;
        this.product_disc_type = product_disc_type;
        this.product_graphics_card = product_graphics_card;
        this.product_price = product_price;
        this.product_ram_size = product_ram_size;
        this.product_disc_size = product_disc_size;
        this.product_screen_diagonal = product_screen_diagonal;
        this.product_amount_available = product_amount_available;
        this.product_amount_sold = product_amount_sold;
        this.product_camera_resolution = product_camera_resolution;
        this.product_time_work = product_time_work;
        this.product_range = product_range;
    }

    public Product(String product_type, String product_mark, String product_status, String product_description, String product_camera, double product_price, int product_amount_available, int product_time_work, int product_range) {
        this.product_type = product_type;
        this.product_mark = product_mark;
        this.product_status = product_status;
        this.product_description = product_description;
        this.product_camera = product_camera;
        this.product_price = product_price;
        this.product_amount_available = product_amount_available;
        this.product_time_work = product_time_work;
        this.product_range = product_range;
    }

    public Product(String product_type, String product_mark, String product_status, String product_description, String product_processor, String product_system, String product_disc_type, String product_graphics_card, double product_price, double product_ram_size, double product_disc_size, double product_screen_diagonal, int product_amount_available) {
        this.product_type = product_type;
        this.product_mark = product_mark;
        this.product_status = product_status;
        this.product_description = product_description;
        this.product_processor = product_processor;
        this.product_system = product_system;
        this.product_disc_type = product_disc_type;
        this.product_graphics_card = product_graphics_card;
        this.product_price = product_price;
        this.product_ram_size = product_ram_size;
        this.product_disc_size = product_disc_size;
        this.product_screen_diagonal = product_screen_diagonal;
        this.product_amount_available = product_amount_available;
    }

    public Product(String product_type, String product_mark, String product_status, String product_description, String product_system, double product_price, double product_ram_size, double product_disc_size, double product_screen_diagonal, int product_amount_available, int product_camera_resolution) {
        this.product_type = product_type;
        this.product_mark = product_mark;
        this.product_status = product_status;
        this.product_description = product_description;
        this.product_system = product_system;
        this.product_price = product_price;
        this.product_ram_size = product_ram_size;
        this.product_disc_size = product_disc_size;
        this.product_screen_diagonal = product_screen_diagonal;
        this.product_amount_available = product_amount_available;
        this.product_camera_resolution = product_camera_resolution;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public String getProduct_type() {
        return product_type;
    }

    public void setProduct_type(String product_type) {
        this.product_type = product_type;
    }

    public String getProduct_mark() {
        return product_mark;
    }

    public void setProduct_mark(String product_mark) {
        this.product_mark = product_mark;
    }

    public String getProduct_status() {
        return product_status;
    }

    public void setProduct_status(String product_status) {
        this.product_status = product_status;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public String getProduct_processor() {
        return product_processor;
    }

    public void setProduct_processor(String product_processor) {
        this.product_processor = product_processor;
    }

    public String getProduct_system() {
        return product_system;
    }

    public void setProduct_system(String product_system) {
        this.product_system = product_system;
    }

    public String getProduct_camera() {
        return product_camera;
    }

    public void setProduct_camera(String product_camera) {
        this.product_camera = product_camera;
    }

    public String getProduct_disc_type() {
        return product_disc_type;
    }

    public void setProduct_disc_type(String product_disc_type) {
        this.product_disc_type = product_disc_type;
    }

    public String getProduct_graphics_card() {
        return product_graphics_card;
    }

    public void setProduct_graphics_card(String product_graphics_card) {
        this.product_graphics_card = product_graphics_card;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(double product_price) {
        this.product_price = product_price;
    }

    public double getProduct_ram_size() {
        return product_ram_size;
    }

    public void setProduct_ram_size(double product_ram_size) {
        this.product_ram_size = product_ram_size;
    }

    public double getProduct_disc_size() {
        return product_disc_size;
    }

    public void setProduct_disc_size(double product_disc_size) {
        this.product_disc_size = product_disc_size;
    }

    public double getProduct_screen_diagonal() {
        return product_screen_diagonal;
    }

    public void setProduct_screen_diagonal(double product_screen_diagonal) {
        this.product_screen_diagonal = product_screen_diagonal;
    }

    public int getProduct_amount_available() {
        return product_amount_available;
    }

    public void setProduct_amount_available(int product_amount_available) {
        this.product_amount_available = product_amount_available;
    }

    public int getProduct_camera_resolution() {
        return product_camera_resolution;
    }

    public void setProduct_camera_resolution(int product_camera_resolution) {
        this.product_camera_resolution = product_camera_resolution;
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

    public int getProduct_amount_sold() {
        return product_amount_sold;
    }

    public void setProduct_amount_sold(int product_amount_sold) {
        this.product_amount_sold = product_amount_sold;
    }

    @Override
    public String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", product_type='" + product_type + '\'' +
                ", product_mark='" + product_mark + '\'' +
                ", product_status='" + product_status + '\'' +
                ", product_description='" + product_description + '\'' +
                ", product_processor='" + product_processor + '\'' +
                ", product_system='" + product_system + '\'' +
                ", product_camera='" + product_camera + '\'' +
                ", product_disc_type='" + product_disc_type + '\'' +
                ", product_graphics_card='" + product_graphics_card + '\'' +
                ", product_price=" + product_price +
                ", product_ram_size=" + product_ram_size +
                ", product_disc_size=" + product_disc_size +
                ", product_screen_diagonal=" + product_screen_diagonal +
                ", product_amount_available=" + product_amount_available +
                ", product_amount_sold=" + product_amount_sold +
                ", product_camera_resolution=" + product_camera_resolution +
                ", product_time_work=" + product_time_work +
                ", product_range=" + product_range +
                '}';
    }
}
