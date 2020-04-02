package pl.tom.authservice.model.credentials;

import pl.tom.authservice.model.user.User;

public class Credentials {

    private String token;
    private User user;
    private boolean status;

    public Credentials() {
    }

    public Credentials(String token, User user, boolean status) {
        this.token = token;
        this.user = user;
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
