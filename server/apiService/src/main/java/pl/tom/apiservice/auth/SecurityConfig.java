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
                .antMatchers(HttpMethod.DELETE, "/user/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/drone/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/drone/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/drone/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/order/drone/all").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/order/drone/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/order/drone/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/order/drone/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/order/drone/{id}").hasRole("ADMIN")

                .antMatchers(HttpMethod.POST, "/laptop/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/laptop/{}").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/laptop/{}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/order/laptop/all").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/order/laptop/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/order/laptop/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/order/laptop/{}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/order/laptop/{id}").hasAnyRole("ADMIN", "USER")

                .antMatchers(HttpMethod.POST, "/smartphone/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/smartphone/{}").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/smartphone/{}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/order/smartphone/all").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/order/smartphone/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/order/smartphone/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/order/smartphone/{}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/order/smartphone/{id}").hasAnyRole("ADMIN", "USER")

                .antMatchers(HttpMethod.POST, "/product/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/product/{}").hasRole("ADMIN")

                .antMatchers(HttpMethod.GET, "/orders/all").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET, "/orders/{id}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST, "/orders/create").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.PUT, "/orders/{}").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.DELETE, "/orders/{id}").hasAnyRole("ADMIN", "USER")

                .and()
                .addFilter(new JwtFilter(authenticationManager()));
    }
}

