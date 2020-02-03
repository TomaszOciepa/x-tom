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

@RestController
public class SignUpController {

    private static final Logger LOG = LoggerFactory.getLogger(SignUpController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/sing-up")
    public String singUp(@RequestBody User user, HttpServletResponse response){
        LOG.info("Trying sing-up: {}", user.getEmail());
        if (userService.emailExists(user)){
            LOG.warn("Email {} is taken", user.getEmail());
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return "Email is taken";
        } else {
            if (userService.emailValid(user.getEmail()) && user.getPassword().length() >= 6){
                userService.save(user);
                response.setStatus(HttpServletResponse.SC_CREATED);
                LOG.info("Account {} has been created", user.getEmail());
                return "Account has been created";
            }else {
                LOG.warn("Email {} is invalid", user.getEmail());
                return "Email invalid";
            }

        }
    }
}
