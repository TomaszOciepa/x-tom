package pl.tom.apiservice.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .cors()
                .and().authorizeRequests()
                .antMatchers(HttpMethod.GET, "/user/all").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/user/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/user/confirm-password").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/user/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/user/change-password").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/user/change-email").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/user/role/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/user/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/product/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/product/{}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/orders/all").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/orders/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/orders//user/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/orders/create").permitAll()
                .antMatchers(HttpMethod.PUT, "/orders/{}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/orders/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/order/all").hasRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/order/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/order/number/{number}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/order/create").permitAll()
                .antMatchers(HttpMethod.PUT, "/order/detail/{}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/order/address/{}").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/order/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/cart/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/cart/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/cart/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/cart/clear/{id}").hasAnyRole("ADMIN", "USER")
                .and()
                .addFilter(new JwtFilter(authenticationManager()));
    }
}

