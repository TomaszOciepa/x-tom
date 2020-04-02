package pl.tom.apiservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import pl.tom.apiservice.model.cart.Cart;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {

    @Query("SELECT c FROM Cart c where c.user.user_id =  ?1")
    List<Cart> getCartByUserId(Long id);

    @Modifying
    @Transactional
    @Query("DELETE FROM Cart c where c.user.user_id = ?1")
    void deleteCartByUserId(Long id);
}
