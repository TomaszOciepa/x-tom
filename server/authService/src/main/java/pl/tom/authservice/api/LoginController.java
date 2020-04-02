package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.authservice.model.credentials.Credentials;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.service.UserService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {

    private static final Logger LOG = LoggerFactory.getLogger(LoginController.class);
    private UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public Credentials login(@RequestBody User client) {
        String email = client.getUser_email();
        Credentials credentials = new Credentials();

        boolean emailExistInDatabase = userService.emailExists(email);

        if (emailExistInDatabase) {
            credentials.setStatus(false);
            LOG.warn("Login {} failed. User does not exist: ", email);
            return credentials;
        } else {
            credentials = userService.login(client);
            boolean status = credentials.isStatus();

            if (status) {
                LOG.info("Login user {} succeeded", email);
            } else {
                LOG.warn("Login {} failed. Incorrect login or password.", email);
            }
            return credentials;
        }

    }
}
