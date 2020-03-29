package pl.tom.authservice.model.passwordReset;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Optional;

public interface PasswordResetRepository extends JpaRepository<PasswordReset, Long> {


    @Query("SELECT p FROM PasswordReset p where p.user.user_id = ?1")
    Optional<PasswordReset> getPasswordResetByUserId(Long userId);

    @Modifying
    @Transactional
    @Query("DELETE FROM PasswordReset p where p.user.user_id = ?1")
    void deletePasswordResetByUserId(Long userId);
}
