package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.authservice.model.user.Credentials;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.service.UserService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginRestController {

    private static final Logger LOG = LoggerFactory.getLogger(LoginRestController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Optional<Credentials> login(@RequestBody User client, HttpServletResponse response) throws IOException {
        LOG.info("Trying login: {}", client.getUser_email());
        Optional<Credentials> credentials1 = Optional.empty();
        if (userService.emailExists(client)) {
            LOG.info("User {} exists", client.getUser_email());
            Optional<Credentials> credentials = Optional.ofNullable(userService.login(client));

            if (credentials.get().getUser() != null) {
                LOG.info("Login {} succeeded", client.getUser_email());
                response.setStatus(200);
            }else {
                LOG.warn("Login {} failed. Incorrect password", client.getUser_email());
                response.sendError(403, "Incorrect login or password");
            }
            return credentials;

        } else {
            LOG.warn("Login {} failed. Incorrect login or User does not exist: ", client.getUser_email());
            response.sendError(403, "Incorrect login or password");

            return credentials1;
        }
    }



}
