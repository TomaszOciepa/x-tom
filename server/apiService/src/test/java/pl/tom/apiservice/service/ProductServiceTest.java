package pl.tom.apiservice.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import pl.tom.apiservice.model.product.ProductRepository;

@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

    @Mock
    ProductRepository productRepository;
    @InjectMocks
    ProductService productService;

//    @Before
//    public void init() {
//        given(productRepository.findAll()).willReturn(prepareMockData());
//    }

    @Test
    public void save() {
//        Product mockProduct = new Product("ASUS", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now());
//
//        given(productRepository.save(mockProduct)).willReturn(mockProduct);
//
//        Product saveProduct = productService.save(mockProduct);
//
//        Assert.assertTrue(mockProduct.getName().equals(saveProduct.getName()));
    }


//    private List<Product> prepareMockData() {
//        List<Product> products = new ArrayList<>();
//        products.add(new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now()));
//        products.add(new Product("mcbook PRO", "Laptop", "Komputer profesionalny", 7500, 10, LocalDateTime.now()));
//        products.add(new Product("Słuchawki Marshall", "Akcesoria", "Słuchawki bezprzewodowe", 500, 60, LocalDateTime.now()));
//
//        return products;
//    }
}
