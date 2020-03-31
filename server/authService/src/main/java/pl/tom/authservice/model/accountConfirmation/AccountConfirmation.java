package pl.tom.authservice.model.accountConfirmation;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "ACCOUNT_CONFIRMATION")
public class AccountConfirmation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long account_confirmation_id;
    private String account_confirmation_email;
    private String account_confirmation_password;
    private String account_confirmation_code;
    private LocalDateTime account_confirmation_date;

    public AccountConfirmation() {
    }

    public AccountConfirmation(String account_confirmation_email, String account_confirmation_code) {
        this.account_confirmation_email = account_confirmation_email;
        this.account_confirmation_code = account_confirmation_code;
    }

    public AccountConfirmation(String account_confirmation_email, String account_confirmation_password, String account_confirmation_code, LocalDateTime account_confirmation_date) {
        this.account_confirmation_email = account_confirmation_email;
        this.account_confirmation_password = account_confirmation_password;
        this.account_confirmation_code = account_confirmation_code;
        this.account_confirmation_date = account_confirmation_date;
    }

    public Long getAccount_confirmation_id() {
        return account_confirmation_id;
    }

    public void setAccount_confirmation_id(Long account_confirmation_id) {
        this.account_confirmation_id = account_confirmation_id;
    }

    public String getAccount_confirmation_email() {
        return account_confirmation_email;
    }

    public void setAccount_confirmation_email(String account_confirmation_email) {
        this.account_confirmation_email = account_confirmation_email;
    }

    public String getAccount_confirmation_password() {
        return account_confirmation_password;
    }

    public void setAccount_confirmation_password(String account_confirmation_password) {
        this.account_confirmation_password = account_confirmation_password;
    }

    public String getAccount_confirmation_code() {
        return account_confirmation_code;
    }

    public void setAccount_confirmation_code(String account_confirmation_code) {
        this.account_confirmation_code = account_confirmation_code;
    }

    public LocalDateTime getAccount_confirmation_date() {
        return account_confirmation_date;
    }

    public void setAccount_confirmation_date(LocalDateTime account_confirmation_date) {
        this.account_confirmation_date = account_confirmation_date;
    }

    @Override
    public String toString() {
        return "AccountConfirmation{" +
                "account_confirmation_id=" + account_confirmation_id +
                ", account_confirmation_email='" + account_confirmation_email + '\'' +
                ", account_confirmation_password='" + account_confirmation_password + '\'' +
                ", account_confirmation_code='" + account_confirmation_code + '\'' +
                ", account_confirmation_date=" + account_confirmation_date +
                '}';
    }
}
