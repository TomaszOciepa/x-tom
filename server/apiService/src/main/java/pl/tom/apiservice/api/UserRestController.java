package pl.tom.apiservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.service.UserService;
import pl.tom.apiservice.model.User;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/user")
public class UserRestController {

    private static final Logger LOG = LoggerFactory.getLogger(UserRestController.class);
    private UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> getAllUser(HttpServletResponse response) {
        LOG.info("method: getAllUser. Trying find all users");
        response.setStatus(200);
        return userService.getAllUser();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: getUserById(). Trying find userId: {}", id);
        Optional<User> user = userService.getUserById(id);

        if (user.isEmpty()) {
            LOG.warn("method: getUserById(). userId {} not found", id);
            response.setStatus(404);
        } else {
            LOG.info("method: getUserById(). userId {} found", id);
            response.setStatus(200);
        }

        return user;
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id, HttpServletResponse response){
        LOG.info("method: deleteById. Deleting user about id {}", id);
        userService.deleteById(id);
        response.setStatus(200);
    }


}