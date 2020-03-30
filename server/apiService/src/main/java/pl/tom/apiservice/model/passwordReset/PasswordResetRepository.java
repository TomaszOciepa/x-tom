package pl.tom.apiservice.model.passwordReset;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordResetRepository extends JpaRepository<PasswordReset, Long>{

}
