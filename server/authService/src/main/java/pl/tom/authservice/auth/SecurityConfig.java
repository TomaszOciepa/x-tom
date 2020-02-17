package pl.tom.authservice.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.POST, "/sing-up").permitAll()

                .antMatchers(HttpMethod.GET, "/drone/all").permitAll()
                .antMatchers(HttpMethod.GET, "/drone/{id}").permitAll()

                .antMatchers(HttpMethod.GET, "/laptop/all").permitAll()
                .antMatchers(HttpMethod.GET, "/laptop/{id}").permitAll()

                .antMatchers(HttpMethod.GET, "/smartphone/all").permitAll()
                .antMatchers(HttpMethod.GET, "/smartphone/{id}").permitAll()

                .antMatchers(HttpMethod.GET, "/product/all").permitAll()
                .antMatchers(HttpMethod.GET, "/product/{id}").permitAll();

        http.csrf().disable();
    }
}
