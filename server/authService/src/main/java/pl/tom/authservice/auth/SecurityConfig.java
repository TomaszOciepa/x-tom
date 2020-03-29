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
                .antMatchers(HttpMethod.POST, "/check-email").permitAll()
                .antMatchers(HttpMethod.POST, "/password-reset/verify-user").permitAll()
                .antMatchers(HttpMethod.POST, "/password-reset/check-code").permitAll()
                .antMatchers(HttpMethod.POST, "/password-reset/set-new").permitAll()

                .antMatchers(HttpMethod.GET, "/product/all").permitAll()
                .antMatchers(HttpMethod.GET, "/product/{id}").permitAll()
                .antMatchers(HttpMethod.GET, "/product/type").permitAll()
                .antMatchers(HttpMethod.GET, "/product/status").permitAll()
                .antMatchers(HttpMethod.POST, "/order/create").permitAll()
                .antMatchers(HttpMethod.POST, "/orders/create").permitAll();

        http.csrf().disable();
    }
}
