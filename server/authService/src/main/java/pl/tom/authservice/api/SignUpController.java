package pl.tom.authservice.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.tom.authservice.model.User;
import pl.tom.authservice.service.UserService;

import javax.servlet.http.HttpServletResponse;

@RestController
public class SignUpController {

    private UserService userService;

    @Autowired
    public SignUpController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/sing-up")
    public String singUp(@RequestBody User user, HttpServletResponse response){
        if (userService.emailExists(user)){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return "email is taken";
        } else {
            if (userService.emailValid(user.getEmail()) || user.getPassword().length() >= 6){
                userService.save(user);
                response.setStatus(HttpServletResponse.SC_CREATED);
                return "account has been created";
            }else {
                return "email invalid";
            }

        }
    }
}
