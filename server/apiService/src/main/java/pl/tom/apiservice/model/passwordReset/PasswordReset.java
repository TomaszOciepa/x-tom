package pl.tom.apiservice.model.passwordReset;

import pl.tom.apiservice.model.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "PASS_RESET")
public class PasswordReset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pass_reset_id;
    private String pass_reset_code;
    private LocalDateTime pass_reset_date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public PasswordReset() {
    }

    public PasswordReset(String pass_reset_code, LocalDateTime pass_reset_date, User user) {
        this.pass_reset_code = pass_reset_code;
        this.pass_reset_date = pass_reset_date;
        this.user = user;
    }

    public Long getPass_reset_id() {
        return pass_reset_id;
    }

    public void setPass_reset_id(Long pass_reset_id) {
        this.pass_reset_id = pass_reset_id;
    }

    public String getPass_reset_code() {
        return pass_reset_code;
    }

    public void setPass_reset_code(String pass_reset_code) {
        this.pass_reset_code = pass_reset_code;
    }

    public LocalDateTime getPass_reset_date() {
        return pass_reset_date;
    }

    public void setPass_reset_date(LocalDateTime pass_reset_date) {
        this.pass_reset_date = pass_reset_date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "PasswordReset{" +
                "pass_reset_id=" + pass_reset_id +
                ", pass_reset_code='" + pass_reset_code + '\'' +
                ", pass_reset_date=" + pass_reset_date +
                ", user=" + user +
                '}';
    }
}

