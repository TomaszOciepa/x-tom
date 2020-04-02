package pl.tom.authservice.service;

import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

//    @Mock
//    ProductRepository productRepository;
//
//    @InjectMocks
//    ProductService productService;
//
//    @Before
//    public void init() {
//        given(productRepository.findAll()).willReturn(prepareMockData());
//    }
//
//    @Test
//    public void should_return_true_getAll() {
//        Assert.assertTrue(3 == productService.getAll().size());
//    }
//
//    @Test
//    public void should_return_false_getAll() {
//        Assert.assertFalse(4 == productService.getAll().size());
//    }
//
//        @Test
//    public void should_return_true_getProductById() {
//        Product product = new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now());
//        product.setId(1L);
//        Optional<Product> mockProduct = Optional.of(new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now()));
//        mockProduct.get().setId(1L);
//
//        given(productRepository.findById(1L)).willReturn(mockProduct);
//
//        String name = productService.getProductById(1L).get().getName();
//
//        Assert.assertTrue(product.getName().equals(name));
//    }
//
//    @Test
//    public void should_return_false_getProductById() {
//        Product product = new Product("HP", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now());
//        product.setId(1L);
//        Optional<Product> mockProduct = Optional.of(new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now()));
//        mockProduct.get().setId(1L);
//
//        given(productRepository.findById(1L)).willReturn(mockProduct);
//
//        String name = productService.getProductById(1L).get().getName();
//
//        Assert.assertFalse(product.getName().equals(name));
//    }
//
//    private List<Product> prepareMockData() {
//        List<Product> products = new ArrayList<>();
//        products.add(new Product("Dell Vostro", "Laptop", "Komputer biznesowy", 3500, 20, LocalDateTime.now()));
//        products.add(new Product("mcbook PRO", "Laptop", "Komputer profesionalny", 7500, 10, LocalDateTime.now()));
//        products.add(new Product("Słuchawki Marshall", "Akcesoria", "Słuchawki bezprzewodowe", 500, 60, LocalDateTime.now()));
//
//        return products;
//    }
}
