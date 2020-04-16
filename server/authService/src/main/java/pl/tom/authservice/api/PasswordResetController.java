package pl.tom.authservice.api;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.passwordResetData.PasswordResetData;
import pl.tom.authservice.service.PasswordResetSevice;
import pl.tom.authservice.service.UserService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/password-reset")
public class PasswordResetController {

    private static final Logger LOG = LoggerFactory.getLogger(PasswordResetController.class);

    private PasswordResetSevice passwordResetSevice;
    private UserService userService;

    @Autowired
    public PasswordResetController(PasswordResetSevice passwordResetSevice, UserService userService) {
        this.passwordResetSevice = passwordResetSevice;
        this.userService = userService;
    }

    @PostMapping("/verify-user")
    public boolean reset(@RequestBody String email) {
        LOG.info("Reset password for: {}", email);

        boolean result = passwordResetSevice.reset(email);

        if (result) {
            LOG.info("account {} found", email);
            LOG.info("sending email to: {}", email);
        } else {
            LOG.warn("account {} not found", email);
        }
        return result;
    }

    @PostMapping("/check-code")
    public boolean check(@RequestBody PasswordResetData passwordResetData) {
        LOG.info("verifies the link for user: {}, code: {}", passwordResetData.getEmail(), passwordResetData.getCode());
        boolean result = passwordResetSevice.check(passwordResetData);

        if (result) {
            LOG.info("the link is correct");
        } else {
            LOG.warn("the link is not valid");
        }
        return result;
    }

    @PostMapping("/set-new")
    public boolean setNewPassword(@RequestBody PasswordResetData passwordResetData) {
        String email = passwordResetData.getEmail();
        LOG.info("Try set new Password for: {}", email);

        boolean correct = passwordResetSevice.check(passwordResetData);

        if (correct) {
            boolean result = userService.setNewPassword(passwordResetData);
            if (result) {
                LOG.info("Set a new password");
                LOG.info("sending email to: {} with a confirmation password change ", email);
                passwordResetSevice.deletePasswordResetByUserId(email);
                LOG.info("Delete password reset data for {}", email);
            } else {
                LOG.warn("Didn't set a new password");
            }

            return result;
        } else {
            LOG.info("Didn't set a new password");
            return false;
        }
    }

}
