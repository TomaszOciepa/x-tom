package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.User;
import pl.tom.apiservice.model.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public Optional<User> getUserById(Long id){
        return repo.findById(id);
    }

    public List<User> getAllUser(){
        return repo.findAll();
    }

    public void deleteById(Long id){
        repo.deleteById(id);
    }
}
