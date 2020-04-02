package pl.tom.apiservice.service;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import pl.tom.apiservice.model.user.User;
import pl.tom.apiservice.repo.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public void should_return_true_getAllUser() {

        Assert.assertEquals(3, userService.getAllUser().size());
    }

    @Test
    public void should_return_false_getAllUser() {

        Assert.assertNotEquals(4, userService.getAllUser().size());
    }

    @Test
    public void should_return_true_getUserById() {
        User user = new User(1L, "tomek02@gmail.com", "haslo123", "ADMIN");
        Optional<User> mockUser = Optional.of(new User(1L, "tomek02@gmail.com", "haslo123", "ADMIN"));

        given(userRepository.findById(1L)).willReturn(mockUser);

        String s = userService.getUserById(1L).get().getUser_email();
        Assert.assertTrue(user.getUser_email().equals(s));
    }

    @Test
    public void should_return_false_getUserById() {
        User user = new User(1L, "anonymous@gmail.com", "haslo123", "ADMIN");
        Optional<User> mockUser = Optional.of(new User(1L, "tomek02@gmail.com", "haslo123", "ADMIN"));

        given(userRepository.findById(1L)).willReturn(mockUser);

        String s = userService.getUserById(1L).get().getUser_email();
        Assert.assertFalse(user.getUser_email().equals(s));
    }


    private List<User> prepareMockData() {
        List<User> users = new ArrayList<>();
        users.add(new User(1L, "tomek02@gmail.com", "haslo123", "ADMIN"));
        users.add(new User(2L,"developer2000@gmail.com", "haslo123", "USER"));
        users.add(new User(3l, "user20@gmail.com", "haslo123", "USER"));

        return users;
    }
}
