package pl.tom.testdbjava.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    private String user_name;
    private String user_lastName;

    @OneToMany(mappedBy = "user")
    Set<Order> order;

    public User() {
    }

    public User(String user_name, String user_lastName) {
        this.user_name = user_name;
        this.user_lastName = user_lastName;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_lastName() {
        return user_lastName;
    }

    public void setUser_lastName(String user_lastName) {
        this.user_lastName = user_lastName;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_name='" + user_name + '\'' +
                ", user_lastName='" + user_lastName + '\'' +
                '}';
    }
}
