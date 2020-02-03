package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static final Logger LOG = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Optional<User> login(@RequestBody User client, HttpServletResponse response) throws IOException {
        LOG.info("Trying login: {}", client.getEmail());
        if (userService.emailExists(client)) {
            LOG.info("User {} exists", client.getEmail());
            Optional<User> credentials = userService.login(client);
            if (credentials.isPresent()) {
                LOG.info("Login {} succeeded", client.getEmail());
                response.setStatus(200);
            }else {
                LOG.warn("Login {} failed. Incorrect password", client.getEmail());
                response.sendError(403, "Incorrect login or password");
            }
            return credentials;

        } else {
            LOG.warn("Login {} failed. Incorrect login or User does not exist: ", client.getEmail());
            response.sendError(403, "Incorrect login or password");
            Optional<User> credentials = Optional.empty();
            return credentials;
        }
    }
}
