package pl.tom.apiservice.api.cart;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.tom.apiservice.model.cart.Cart;
import pl.tom.apiservice.service.CartService;

import java.util.List;

//localhost
//@CrossOrigin(origins = "http://localhost:4200")
//aws
@CrossOrigin(origins = "http://x-tom-shop.s3-website.eu-central-1.amazonaws.com")
@RestController
@RequestMapping("/cart")
public class CartRestController {

     private static final Logger LOG = LoggerFactory.getLogger(CartRestController.class);
     private CartService cartService;

     @Autowired
    public CartRestController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/{id}")
    public List<Cart> getCartByUserId(@PathVariable(value = "id") Long id){
        LOG.info("method: getCartByUserId(). Trying get cart with user id {}", id);

        List<Cart> cartList = cartService.getCartByUserId(id);

        if (cartList.size() > 0){
            LOG.info("Cart exists");
        }else {
            LOG.warn("Cart does not exists");
        }
        return cartList;
    }

    @PostMapping("/create")
    public Cart createCartItem(@RequestBody Cart cart) {
        LOG.info("method: createCartItem(). Add new cartItem to database");
        return cartService.createCartItem(cart);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItemById(@PathVariable(value = "id") Long id) {
        LOG.info("method: deleteCartItemById(). Deleting cart item about id {}", id);
        cartService.deleteCartItemById(id);
    }

    @DeleteMapping("/clear/{id}")
    public void deleteCartByUserId(@PathVariable(value = "id") Long id) {
        LOG.info("method: deleteCartByUserId(). Deleting cart about user id {}", id);
        cartService.deleteCartByUserId(id);
    }
}
