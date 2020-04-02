package pl.tom.authservice.service;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import pl.tom.authservice.model.user.User;
import pl.tom.authservice.repo.UserRepository;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    @Before
    public void init() {
        given(userRepository.findAll()).willReturn(prepareMockData());
    }

    @Test
    public void should_return_user_findByEmail() {
        String email = "developer2000@gmail.com";
        Assert.assertTrue(userService.findByEmail(email).isPresent());
    }

    @Test
    public void should_no_return_user_findByEmail() {
        String email = "anonymous@gmail.com";
        Assert.assertFalse(userService.findByEmail(email).isPresent());
    }

    @Test
    public void should_return_true_emailExists() {
        User user = new User("tomek02@gmail.com", "haslo123", "ADMIN");
        Assert.assertTrue(userService.emailExists(user.getUser_email()));
    }

    @Test
    public void should_return_true_emailValid() {
        String email = "anonymous@gmail.com";
        Assert.assertTrue(userService.emailValid(email));
    }

    @Test
    public void should_no_return_true_emailValid() {
        String email = "anonymous@gmailcom";
        Assert.assertFalse(userService.emailValid(email));
    }

    private List<User> prepareMockData() {
        List<User> users = new ArrayList<>();
        users.add(new User("tomek02@gmail.com", "haslo123", "ADMIN"));
        users.add(new User("developer2000@gmail.com", "haslo123", "USER"));
        users.add(new User("user20@gmail.com", "haslo123", "USER"));

        
        return users;
    }
}
