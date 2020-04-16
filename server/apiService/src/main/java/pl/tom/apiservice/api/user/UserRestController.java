package pl.tom.apiservice.api.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.changeEmailData.ChangeEmailData;
import pl.tom.apiservice.model.changePasswordData.ChangePasswordData;
import pl.tom.apiservice.service.UserService;
import pl.tom.apiservice.model.user.User;

import java.util.List;
import java.util.Optional;

//---->localhost
//@CrossOrigin(origins = "http://localhost:4200")

//---->remote
@CrossOrigin(origins = "https://x-tom-client.herokuapp.com")
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
    public List<User> getAllUser() {
        LOG.info("method: getAllUser. Trying find all users");
        return userService.getAllUser();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable(value = "id") Long id) {
        LOG.info("method: getUserById(). Trying find userId: {}", id);
        Optional<User> user = userService.getUserById(id);

        if (user.isPresent()) {
            LOG.info("method: getUserById(). userId {} found", id);
        } else {
            LOG.warn("method: getUserById(). userId {} not found", id);
        }
        return user;
    }

    @PostMapping("/confirm-password")
    public boolean confirmPassword(@RequestBody ChangePasswordData passwordData) {
        LOG.info("method: confirmPassword()");
        boolean result = userService.confirmPassword(passwordData);

        if(result){
            LOG.info("Password confirmed");
        }else {
            LOG.warn("Password not confirmed");
        }
        return result;
    }

    @PutMapping("/{id}")
    public Optional<User> edit(@PathVariable(value = "id") Long id, @RequestBody User userEdited) {
        LOG.info("method: edit. Edit user");
        return userService.edit(id, userEdited);
    }

    @PutMapping("/role/{id}")
    public Optional<User> editRole(@PathVariable(value = "id") Long id, @RequestBody User userEdited) {
        LOG.info("method: editRole. Edit user");
        return userService.editRole(id, userEdited);
    }

    @PutMapping("/change-password")
    public boolean changePassword(@RequestBody ChangePasswordData changePasswordData) {
        LOG.info("method: changePassword()");

        boolean result = userService.changePassword(changePasswordData);

        if(result){
            LOG.info("Password changed");
        }else {
            LOG.warn("Password has not been changed");
        }
        return result;
    }

    @PutMapping("/change-email")
    public boolean changeEmail(@RequestBody ChangeEmailData changeEmailData) {
        LOG.info("method: changeEmail()");

        boolean result = userService.changeEmail(changeEmailData);

        if(result){
            LOG.info("Email changed");
        }else {
            LOG.warn("Email has not been changed");
        }
        return result;
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable(value = "id") Long id){
        LOG.info("method: deleteById. Deleting user about id {}", id);
        userService.deleteById(id);
    }


}
