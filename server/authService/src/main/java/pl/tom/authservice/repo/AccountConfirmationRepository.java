package pl.tom.authservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import pl.tom.authservice.model.accountConfirmation.AccountConfirmation;

import javax.transaction.Transactional;
import java.util.Optional;

public interface AccountConfirmationRepository extends JpaRepository<AccountConfirmation, Long> {


    @Query("SELECT a FROM AccountConfirmation a where a.account_confirmation_email = ?1 and  a.account_confirmation_code = ?2")
    Optional<AccountConfirmation> getAccountConfirmationByEmailAndCode(String email, String code);

    @Modifying
    @Transactional
    @Query("DELETE FROM AccountConfirmation a where a.account_confirmation_id= ?1")
    void deleteAccountConfirmationByEmail(Long accountId);
}
