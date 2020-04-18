package pl.tom.authservice.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.authservice.model.accountConfirmation.AccountConfirmation;
import pl.tom.authservice.service.AccountConfirmationService;

//localhost
@CrossOrigin(origins = "http://localhost:4200")
//aws
//@CrossOrigin(origins = "http://x-tom-shop.s3-website.eu-central-1.amazonaws.com")
@RestController
@RequestMapping("/account")
public class AccountConfirmationController {

    private static final Logger LOG = LoggerFactory.getLogger(AccountConfirmationController.class);

    private AccountConfirmationService accountConfirmationService;

    @Autowired
    public AccountConfirmationController(AccountConfirmationService accountConfirmationService) {
        this.accountConfirmationService = accountConfirmationService;
    }

    @PostMapping("/check-email")
    public boolean checkEmail(@RequestBody String email) {
        String newEmail = email.toLowerCase();
        LOG.info("check if the email: {} exists in database: ", newEmail);
        boolean result = accountConfirmationService.checkEmail(newEmail);

        if (result) {
            LOG.warn("Email does not exist. You can create an account");
        } else {
            LOG.info("Email exists in database. You can not create an account");
        }
        return result;
    }

    @PostMapping("/save")
    public boolean save(@RequestBody AccountConfirmation accountConfirmationData) {
        LOG.info("method save() email {} pass {}", accountConfirmationData.getAccount_confirmation_email(), accountConfirmationData.getAccount_confirmation_password());
        boolean result = accountConfirmationService.save(accountConfirmationData);

        if (result) {
            String email = accountConfirmationData.getAccount_confirmation_email();
            LOG.info("account saved");
            LOG.info("sending email to: {} with a  link to account confirmation ", email);
        } else {
            LOG.warn("account not saved");
        }
        return result;
    }

    @GetMapping("/confirmation")
    public boolean confirmation(@RequestParam(name = "code") String code, @RequestParam(name = "email") String email) {
        LOG.info("method confirmation()");

        AccountConfirmation accountConfirmationData = new AccountConfirmation(email, code);
        boolean result = accountConfirmationService.confirmation(accountConfirmationData);

        if (result) {
            LOG.info("account confirmed");
            LOG.info("sending email to: {} with a  thanks for registration ", email);
        } else {
            LOG.warn("account not confirmed");
        }
        return result;
    }

}
