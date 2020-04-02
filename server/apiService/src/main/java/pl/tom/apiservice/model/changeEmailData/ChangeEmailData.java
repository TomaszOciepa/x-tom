package pl.tom.apiservice.model.changeEmailData;

public class ChangeEmailData {

    private Long userId;
    private String email;

    public ChangeEmailData(Long userId, String email) {
        this.userId = userId;
        this.email = email;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "ChangeEmailData{" +
                "userId=" + userId +
                ", email='" + email + '\'' +
                '}';
    }
}
