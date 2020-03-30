package pl.tom.apiservice.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.user.ChangeEmailData;
import pl.tom.apiservice.model.user.ChangePasswordData;
import pl.tom.apiservice.model.user.User;
import pl.tom.apiservice.model.user.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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

    public boolean changeEmail(ChangeEmailData changeEmailData) {
        Long userId = changeEmailData.getUserId();
        String newEmail = changeEmailData.getEmail();

        boolean result = emailExists(newEmail);

        if(!result){
            Optional<User> userOptional = getUserById(userId);
            User user = userOptional.get();
            user.setUser_email(newEmail);
            repo.save(user);
            return true;
        }else {
            return false;
        }
    }

    private boolean emailExists(String email) {
        List<User> allUser = getAllUser();

        Set<User> collect = allUser.stream().filter(user -> user.getUser_email().contains(email)).collect(Collectors.toSet());

        if(collect.isEmpty()){
            return false;
        }else {
            return true;
        }

    }

    public boolean confirmPassword(ChangePasswordData passwordData) {
        Long userId = passwordData.getUser_id();
        String passwordForConfirmation = passwordData.getPassword();

        Optional<User> userOptional = getUserById(userId);

        if(userOptional.isPresent()){
            User user = userOptional.get();
            String userPassword = user.getUser_password();

            boolean result = passwordEncoder.matches(passwordForConfirmation, userPassword);

            if(result){
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }
}
