package pl.tom.apiservice.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.user.ChangePasswordData;
import pl.tom.apiservice.model.user.User;
import pl.tom.apiservice.model.user.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository repo;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository repo, PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
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

    public Optional<User> edit(Long id, User userEdited) {
        Optional<User> updateUser = repo.findById(id);

        if (updateUser.isPresent()) {
            updateUser.get().setUser_firstName(userEdited.getUser_firstName());
            updateUser.get().setUser_lastName(userEdited.getUser_lastName());
            updateUser.get().setUser_phoneNumber(userEdited.getUser_phoneNumber());
            updateUser.get().setUser_zipCode(userEdited.getUser_zipCode());
            updateUser.get().setUser_city(userEdited.getUser_city());
            updateUser.get().setUser_street(userEdited.getUser_street());
            return updateUser = Optional.of(repo.save(updateUser.get()));

        } else {
            return updateUser;
        }
    }

    public Optional<User> editRole(Long id, User userEdited) {
        Optional<User> updateUser = repo.findById(id);

        if (updateUser.isPresent()) {
            updateUser.get().setUser_role(userEdited.getUser_role());
            return updateUser = Optional.of(repo.save(updateUser.get()));

        } else {
            return updateUser;
        }
    }

    public boolean changePassword(ChangePasswordData changePasswordData) {
        Long userId = changePasswordData.getUser_id();
        String newPassword = changePasswordData.getPassword();

        Optional<User> userOptional = getUserById(userId);

        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setUser_password(passwordEncoder.encode(newPassword));
            repo.save(user);
            return true;
        }else {
            return false;
        }
    }
}
