package pl.tom.apiservice.model.orders;

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
    private int orders_number;
    private int orders_number_delivery_days;
    private String orders_status;
    private String orders_delivery_method;
    private String orders_payments_method;
    private String orders_firstName;
    private String orders_lastName;
    private String orders_street;
    private String orders_zipCode;
    private String orders_city;
    private String orders_email;
    private int orders_phoneNumber;
    private LocalDateTime orders_date_time;
    private LocalDateTime orders_date_time_delivery;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Orders() {
    }

    public Orders(double orders_payments_sum, int orders_number, String orders_status, String orders_delivery_method, String orders_payments_method, String orders_firstName, String orders_lastName, String orders_street, String orders_zipCode, String orders_city, String orders_email, int orders_phoneNumber) {
        this.orders_payments_sum = orders_payments_sum;
        this.orders_number = orders_number;
        this.orders_status = orders_status;
        this.orders_delivery_method = orders_delivery_method;
        this.orders_payments_method = orders_payments_method;
        this.orders_firstName = orders_firstName;
        this.orders_lastName = orders_lastName;
        this.orders_street = orders_street;
        this.orders_zipCode = orders_zipCode;
        this.orders_city = orders_city;
        this.orders_email = orders_email;
        this.orders_phoneNumber = orders_phoneNumber;
    }

    public Orders(double orders_payments_sum, int orders_number, String orders_status, String orders_delivery_method, String orders_payments_method, String orders_firstName, String orders_lastName, String orders_street, String orders_zipCode, String orders_city, String orders_email, int orders_phoneNumber, User user) {
        this.orders_payments_sum = orders_payments_sum;
        this.orders_number = orders_number;
        this.orders_status = orders_status;
        this.orders_delivery_method = orders_delivery_method;
        this.orders_payments_method = orders_payments_method;
        this.orders_firstName = orders_firstName;
        this.orders_lastName = orders_lastName;
        this.orders_street = orders_street;
        this.orders_zipCode = orders_zipCode;
        this.orders_city = orders_city;
        this.orders_email = orders_email;
        this.orders_phoneNumber = orders_phoneNumber;
        this.user = user;
    }

    public Orders(double orders_payments_sum, int orders_number, int orders_number_delivery_days, String orders_status, String orders_delivery_method, String orders_payments_method, String orders_firstName, String orders_lastName, String orders_street, String orders_zipCode, String orders_city, String orders_email, int orders_phoneNumber, LocalDateTime orders_date_time, User user) {
        this.orders_payments_sum = orders_payments_sum;
        this.orders_number = orders_number;
        this.orders_number_delivery_days = orders_number_delivery_days;
        this.orders_status = orders_status;
        this.orders_delivery_method = orders_delivery_method;
        this.orders_payments_method = orders_payments_method;
        this.orders_firstName = orders_firstName;
        this.orders_lastName = orders_lastName;
        this.orders_street = orders_street;
        this.orders_zipCode = orders_zipCode;
        this.orders_city = orders_city;
        this.orders_email = orders_email;
        this.orders_phoneNumber = orders_phoneNumber;
        this.orders_date_time = orders_date_time;
        this.user = user;
    }

    public Orders(double orders_payments_sum, int orders_number, int orders_number_delivery_days, String orders_status, String orders_delivery_method, String orders_payments_method, String orders_firstName, String orders_lastName, String orders_street, String orders_zipCode, String orders_city, String orders_email, int orders_phoneNumber, LocalDateTime orders_date_time, LocalDateTime orders_date_time_delivery, User user) {
        this.orders_payments_sum = orders_payments_sum;
        this.orders_number = orders_number;
        this.orders_number_delivery_days = orders_number_delivery_days;
        this.orders_status = orders_status;
        this.orders_delivery_method = orders_delivery_method;
        this.orders_payments_method = orders_payments_method;
        this.orders_firstName = orders_firstName;
        this.orders_lastName = orders_lastName;
        this.orders_street = orders_street;
        this.orders_zipCode = orders_zipCode;
        this.orders_city = orders_city;
        this.orders_email = orders_email;
        this.orders_phoneNumber = orders_phoneNumber;
        this.orders_date_time = orders_date_time;
        this.orders_date_time_delivery = orders_date_time_delivery;
        this.user = user;
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

    public int getOrders_number() {
        return orders_number;
    }

    public void setOrders_number(int orders_number) {
        this.orders_number = orders_number;
    }

    public int getOrders_number_delivery_days() {
        return orders_number_delivery_days;
    }

    public void setOrders_number_delivery_days(int orders_number_delivery_days) {
        this.orders_number_delivery_days = orders_number_delivery_days;
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

    public String getOrders_firstName() {
        return orders_firstName;
    }

    public void setOrders_firstName(String orders_firstName) {
        this.orders_firstName = orders_firstName;
    }

    public String getOrders_lastName() {
        return orders_lastName;
    }

    public void setOrders_lastName(String orders_lastName) {
        this.orders_lastName = orders_lastName;
    }

    public String getOrders_street() {
        return orders_street;
    }

    public void setOrders_street(String orders_street) {
        this.orders_street = orders_street;
    }

    public String getOrders_zipCode() {
        return orders_zipCode;
    }

    public void setOrders_zipCode(String orders_zipCode) {
        this.orders_zipCode = orders_zipCode;
    }

    public String getOrders_city() {
        return orders_city;
    }

    public void setOrders_city(String orders_city) {
        this.orders_city = orders_city;
    }

    public String getOrders_email() {
        return orders_email;
    }

    public void setOrders_email(String orders_email) {
        this.orders_email = orders_email;
    }

    public int getOrders_phoneNumber() {
        return orders_phoneNumber;
    }

    public void setOrders_phoneNumber(int orders_phoneNumber) {
        this.orders_phoneNumber = orders_phoneNumber;
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

    @Override
    public String toString() {
        return "Orders{" +
                "orders_id=" + orders_id +
                ", orders_payments_sum=" + orders_payments_sum +
                ", orders_number=" + orders_number +
                ", orders_number_delivery_days=" + orders_number_delivery_days +
                ", orders_status='" + orders_status + '\'' +
                ", orders_delivery_method='" + orders_delivery_method + '\'' +
                ", orders_payments_method='" + orders_payments_method + '\'' +
                ", orders_firstName='" + orders_firstName + '\'' +
                ", orders_lastName='" + orders_lastName + '\'' +
                ", orders_street='" + orders_street + '\'' +
                ", orders_zipCode='" + orders_zipCode + '\'' +
                ", orders_city='" + orders_city + '\'' +
                ", orders_email='" + orders_email + '\'' +
                ", orders_phoneNumber='" + orders_phoneNumber + '\'' +
                ", orders_date_time=" + orders_date_time +
                ", orders_date_time_delivery=" + orders_date_time_delivery +
                ", user=" + user +
                '}';
    }
}
