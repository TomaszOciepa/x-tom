package pl.tom.authservice.model.order;

import pl.tom.authservice.model.Product;

import javax.persistence.*;

@Entity
@Table(name = "ORDER_ITEM")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_item_id;
    private int order_item_number;
    private int order_item_amount;
    private double order_item_price;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public OrderItem() {
    }

    public OrderItem(int order_item_amount, double order_item_price, Product product) {
        this.order_item_amount = order_item_amount;
        this.order_item_price = order_item_price;
        this.product = product;
    }

    public OrderItem(int order_item_number, int order_item_amount, double order_item_price, Product product) {
        this.order_item_number = order_item_number;
        this.order_item_amount = order_item_amount;
        this.order_item_price = order_item_price;
        this.product = product;
    }

    public Long getOrder_item_id() {
        return order_item_id;
    }

    public void setOrder_item_id(Long order_item_id) {
        this.order_item_id = order_item_id;
    }

    public int getOrder_item_number() {
        return order_item_number;
    }

    public void setOrder_item_number(int order_item_number) {
        this.order_item_number = order_item_number;
    }

    public int getOrder_item_amount() {
        return order_item_amount;
    }

    public void setOrder_item_amount(int order_item_amount) {
        this.order_item_amount = order_item_amount;
    }

    public double getOrder_item_price() {
        return order_item_price;
    }

    public void setOrder_item_price(double order_item_price) {
        this.order_item_price = order_item_price;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "order_item_id=" + order_item_id +
                ", order_item_number=" + order_item_number +
                ", order_item_amount=" + order_item_amount +
                ", order_item_price=" + order_item_price +
                ", product=" + product +
                '}';
    }
}
