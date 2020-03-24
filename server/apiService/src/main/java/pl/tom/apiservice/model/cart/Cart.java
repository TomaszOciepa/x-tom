package pl.tom.apiservice.model.cart;

import pl.tom.apiservice.model.product.Product;
import pl.tom.apiservice.model.user.User;


import javax.persistence.*;

@Entity
@Table(name = "CART")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cart_id;
    private int order_item_amount;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Cart() {
    }

    public Cart(int order_item_amount, Product product, User user) {
        this.order_item_amount = order_item_amount;
        this.product = product;
        this.user = user;
    }

    public Long getCart_id() {
        return cart_id;
    }

    public void setCart_id(Long cart_id) {
        this.cart_id = cart_id;
    }

    public int getOrder_item_amount() {
        return order_item_amount;
    }

    public void setOrder_item_amount(int order_item_amount) {
        this.order_item_amount = order_item_amount;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cart_id=" + cart_id +
                ", order_item_amount=" + order_item_amount +
                ", product=" + product +
                ", user=" + user +
                '}';
    }
}
