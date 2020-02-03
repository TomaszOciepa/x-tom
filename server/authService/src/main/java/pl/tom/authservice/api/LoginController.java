package pl.tom.authservice.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.authservice.model.User;
import pl.tom.authservice.service.UserService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@RestController
public class LoginController {

    private UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public Optional<User> login(@RequestBody User client, HttpServletResponse response) throws IOException {

        if (userService.emailExists(client)) {
            Optional<User> credentials = userService.login(client);
            if (credentials.isPresent()) {
                response.setStatus(200);
            }else {
                response.sendError(403, "Incorrect login or password");
            }
            return credentials;

        } else {
            response.sendError(403, "Incorrect login or password");
            Optional<User> credentials = Optional.empty();
            return credentials;
        }
    }
}
