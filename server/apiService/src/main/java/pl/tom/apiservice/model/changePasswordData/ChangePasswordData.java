package pl.tom.apiservice.model.changePasswordData;

public class ChangePasswordData {

    private Long user_id;
    private String password;

    public ChangePasswordData(Long user_id, String password) {
        this.user_id = user_id;
        this.password = password;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "ChangePasswordData{" +
                "user_id=" + user_id +
                ", password='" + password + '\'' +
                '}';
    }
}
