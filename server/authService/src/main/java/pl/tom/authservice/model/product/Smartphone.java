package pl.tom.authservice.model.product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Smartphone {

    @Id
    @GeneratedValue
    private Long smartphone_id;
    private String smartphone_mark;
    private String smartphone_description;
    private double smartphone_price;
    private String smartphone_status;
    private String smartphone_system;
    private double smartphone_screen_diagonal;
    private double smartphone_disc_size;
    private double smartphone_ram_size;
    private int smartphone_camera_resolution;
    private int smartphone_amount_available;

    public Smartphone() {
    }

    public Smartphone(String smartphone_mark, String smartphone_description, double smartphone_price, String smartphone_status, String smartphone_system, double smartphone_screen_diagonal, double smartphone_disc_size, double smartphone_ram_size, int smartphone_camera_resolution, int smartphone_amount_available) {
        this.smartphone_mark = smartphone_mark;
        this.smartphone_description = smartphone_description;
        this.smartphone_price = smartphone_price;
        this.smartphone_status = smartphone_status;
        this.smartphone_system = smartphone_system;
        this.smartphone_screen_diagonal = smartphone_screen_diagonal;
        this.smartphone_disc_size = smartphone_disc_size;
        this.smartphone_ram_size = smartphone_ram_size;
        this.smartphone_camera_resolution = smartphone_camera_resolution;
        this.smartphone_amount_available = smartphone_amount_available;
    }

    public Long getSmartphone_id() {
        return smartphone_id;
    }

    public void setSmartphone_id(Long smartphone_id) {
        this.smartphone_id = smartphone_id;
    }

    public String getSmartphone_mark() {
        return smartphone_mark;
    }

    public void setSmartphone_mark(String smartphone_mark) {
        this.smartphone_mark = smartphone_mark;
    }

    public double getSmartphone_price() {
        return smartphone_price;
    }

    public void setSmartphone_price(double smartphone_price) {
        this.smartphone_price = smartphone_price;
    }

    public String getSmartphone_status() {
        return smartphone_status;
    }

    public void setSmartphone_status(String smartphone_status) {
        this.smartphone_status = smartphone_status;
    }

    public String getSmartphone_system() {
        return smartphone_system;
    }

    public void setSmartphone_system(String smartphone_system) {
        this.smartphone_system = smartphone_system;
    }

    public double getSmartphone_screen_diagonal() {
        return smartphone_screen_diagonal;
    }

    public void setSmartphone_screen_diagonal(double smartphone_screen_diagonal) {
        this.smartphone_screen_diagonal = smartphone_screen_diagonal;
    }

    public double getSmartphone_disc_size() {
        return smartphone_disc_size;
    }

    public void setSmartphone_disc_size(double smartphone_disc_size) {
        this.smartphone_disc_size = smartphone_disc_size;
    }

    public double getSmartphone_ram_size() {
        return smartphone_ram_size;
    }

    public void setSmartphone_ram_size(double smartphone_ram_size) {
        this.smartphone_ram_size = smartphone_ram_size;
    }

    public int getSmartphone_camera_resolution() {
        return smartphone_camera_resolution;
    }

    public void setSmartphone_camera_resolution(int smartphone_camera_resolution) {
        this.smartphone_camera_resolution = smartphone_camera_resolution;
    }

    public int getSmartphone_amount_available() {
        return smartphone_amount_available;
    }

    public void setSmartphone_amount_available(int smartphone_amount_available) {
        this.smartphone_amount_available = smartphone_amount_available;
    }

    public String getSmartphone_description() {
        return smartphone_description;
    }

    public void setSmartphone_description(String smartphone_description) {
        this.smartphone_description = smartphone_description;
    }

    @Override
    public String toString() {
        return "Smartphone{" +
                "smartphone_id=" + smartphone_id +
                ", smartphone_mark='" + smartphone_mark + '\'' +
                ", smartphone_description='" + smartphone_description + '\'' +
                ", smartphone_price=" + smartphone_price +
                ", smartphone_status='" + smartphone_status + '\'' +
                ", smartphone_system='" + smartphone_system + '\'' +
                ", smartphone_screen_diagonal=" + smartphone_screen_diagonal +
                ", smartphone_disc_size=" + smartphone_disc_size +
                ", smartphone_ram_size=" + smartphone_ram_size +
                ", smartphone_camera_resolution=" + smartphone_camera_resolution +
                ", smartphone_amount_available=" + smartphone_amount_available +
                '}';
    }
}
