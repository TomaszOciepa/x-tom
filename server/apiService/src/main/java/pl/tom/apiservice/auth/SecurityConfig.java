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
                .antMatchers(HttpMethod.GET, "/user/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/user/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/user/role/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/user/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/product/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/product/{}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/orders/all").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/orders/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/orders/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/orders/{}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/orders/{id}").hasAnyRole("ADMIN", "USER")

                .antMatchers(HttpMethod.GET, "/cart/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/cart/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/cart/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/cart/clear/{id}").hasAnyRole("ADMIN", "USER")
                .and()
                .addFilter(new JwtFilter(authenticationManager()));
    }
}

