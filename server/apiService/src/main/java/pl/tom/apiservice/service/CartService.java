package pl.tom.apiservice.service;

import org.springframework.stereotype.Service;
import pl.tom.apiservice.model.cart.Cart;
import pl.tom.apiservice.model.cart.CartRepository;

import java.util.List;

@Service
public class CartService {

    private CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }


    public List<Cart> getCartByUserId(Long id) {
        return cartRepository.getCartByUserId(id);
    }

    public Cart createCartItem(Cart cart) {
        return cartRepository.save(cart);
    }

    public void deleteCartItemById(Long id) {
        cartRepository.deleteById(id);
    }

    public void deleteCartByUserId(Long id) {
        cartRepository.deleteCartByUserId(id);
    }
}
