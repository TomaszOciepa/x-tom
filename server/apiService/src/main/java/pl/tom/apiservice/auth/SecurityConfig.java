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
                .antMatchers(HttpMethod.DELETE, "/user/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/product/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/product/drone/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/drone/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/product/drone/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/product/laptop/create").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/product/laptop/{id}").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/product/laptop/{id}").hasRole("ADMIN")
                .and()
                .addFilter(new JwtFilter(authenticationManager()));
    }
}

