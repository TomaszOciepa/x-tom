package pl.tom.apiservice.api.cart;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.cart.Cart;
import pl.tom.apiservice.model.orders.Orders;
import pl.tom.apiservice.service.CartService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cart")
public class CartRestController {

     private static final Logger LOG = LoggerFactory.getLogger(CartRestController.class);
     private CartService cartService;

     @Autowired
    public CartRestController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/all")
    public List<Cart> getCartByUserId(@RequestParam Long id, HttpServletResponse response){
        LOG.info("method: getCartByUserId(). Trying get cart with user id {}", id);
        return cartService.getCartByUserId(id);
    }

    @PostMapping("/create")
    public Cart createCartItem(@RequestBody Cart cart, HttpServletResponse response) {
        LOG.info("method: createCartItem(). Add new cartItem to database");
        return cartService.createCartItem(cart);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItemById(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteCartItemById(). Deleting cart item about id {}", id);
        cartService.deleteCartItemById(id);
    }

    @DeleteMapping("/clear/{id}")
    public void deleteCartByUserId(@PathVariable(value = "id") Long id, HttpServletResponse response) {
        LOG.info("method: deleteCartByUserId(). Deleting cart about user id {}", id);
        cartService.deleteCartByUserId(id);
    }
}
