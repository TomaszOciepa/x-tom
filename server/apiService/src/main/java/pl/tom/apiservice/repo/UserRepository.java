package pl.tom.apiservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.tom.apiservice.model.user.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
