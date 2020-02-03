package pl.tom.authservice.api;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import pl.tom.authservice.model.User;
import pl.tom.authservice.model.UserRepository;
import pl.tom.authservice.service.UserService;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MyController.class)
public class MyControllerTest {

    @Autowired
    private MyController myController;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;


    @Test
    public void getUserById() throws Exception {

        // when: mock the data return  by the user service  class

        User user = new User();
        user.setEmail("tom.ociepa@gmail.com");
        user.setRole("ADMIN");
        

        when(userService.getUserById(anyLong())).thenReturn(user);
        //then: create a mock HTTP request to verify the excepted result

        mockMvc.perform(MockMvcRequestBuilders.get("/user/1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("tom.ociepa@gmail.com"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.role").value("ADMIN"))
                .andExpect(status().isOk());
    }
}