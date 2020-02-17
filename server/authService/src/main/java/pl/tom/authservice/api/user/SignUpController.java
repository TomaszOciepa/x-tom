package pl.tom.authservice.api.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.service.user.UserService;

import javax.servlet.http.HttpServletResponse;

@RestController
public class SignUpController {

    private static final Logger LOG = LoggerFactory.getLogger(SignUpController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/sing-up")
    public String singUp(@RequestBody User user, HttpServletResponse response){
        LOG.info("Trying sing-up: {}", user.getUser_email());
        if (userService.emailExists(user)){
            LOG.warn("Email {} is taken", user.getUser_email());
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return "Email is taken";
        } else {
            if (userService.emailValid(user.getUser_email()) && user.getUser_password().length() >= 6){
                userService.save(user);
                response.setStatus(HttpServletResponse.SC_CREATED);
                LOG.info("Account {} has been created", user.getUser_email());
                return "Account has been created";
            }else {
                LOG.warn("Email {} is invalid", user.getUser_email());
                return "Email invalid";
            }

        }
    }
}
