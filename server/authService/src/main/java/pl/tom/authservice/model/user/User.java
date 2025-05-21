package pl.tom.authservice.model.user;

import pl.tom.authservice.model.passwordReset.PasswordReset;
import pl.tom.authservice.model.orders.Orders;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "\"user\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    private String user_email;
    private String user_password;
    private String user_role;
    private String user_firstName;
    private String user_lastName;
    private Long user_phoneNumber;
    private String user_zipCode;
    private String user_city;
    private String user_street;

    @OneToMany(mappedBy = "user")
    Set<Orders> order;

    @OneToMany(mappedBy = "user")
    Set<PasswordReset> passwordReset;

    public User() {
    }

    public User(String user_email, String user_password) {
        this.user_email = user_email;
        this.user_password = user_password;
    }

    public User(String user_email, String user_password, String user_role) {
        this.user_email = user_email;
        this.user_password = user_password;
        this.user_role = user_role;
    }

    public User(String user_email, String user_password, String user_role, String user_firstName, String user_lastName, Long user_phoneNumber, String user_zipCode, String user_city, String user_street) {
        this.user_email = user_email;
        this.user_password = user_password;
        this.user_role = user_role;
        this.user_firstName = user_firstName;
        this.user_lastName = user_lastName;
        this.user_phoneNumber = user_phoneNumber;
        this.user_zipCode = user_zipCode;
        this.user_city = user_city;
        this.user_street = user_street;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_role() {
        return user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }

    public String getUser_firstName() {
        return user_firstName;
    }

    public void setUser_firstName(String user_firstName) {
        this.user_firstName = user_firstName;
    }

    public String getUser_lastName() {
        return user_lastName;
    }

    public void setUser_lastName(String user_lastName) {
        this.user_lastName = user_lastName;
    }

    public Long getUser_phoneNumber() {
        return user_phoneNumber;
    }

    public void setUser_phoneNumber(Long user_phoneNumber) {
        this.user_phoneNumber = user_phoneNumber;
    }

    public String getUser_zipCode() {
        return user_zipCode;
    }

    public void setUser_zipCode(String user_zipCode) {
        this.user_zipCode = user_zipCode;
    }

    public String getUser_city() {
        return user_city;
    }

    public void setUser_city(String user_city) {
        this.user_city = user_city;
    }

    public String getUser_street() {
        return user_street;
    }

    public void setUser_street(String user_street) {
        this.user_street = user_street;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_email='" + user_email + '\'' +
                ", user_password='" + user_password + '\'' +
                ", user_role='" + user_role + '\'' +
                ", user_firstName='" + user_firstName + '\'' +
                ", user_lastName='" + user_lastName + '\'' +
                ", user_phoneNumber=" + user_phoneNumber +
                ", user_zipCode='" + user_zipCode + '\'' +
                ", user_city='" + user_city + '\'' +
                ", user_street='" + user_street + '\'' +
                '}';
    }
}
