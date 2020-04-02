package pl.tom.apiservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.tom.apiservice.model.passwordReset.PasswordReset;

public interface PasswordResetRepository extends JpaRepository<PasswordReset, Long>{

}
