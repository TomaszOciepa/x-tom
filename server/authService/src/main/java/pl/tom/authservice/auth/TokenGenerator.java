package pl.tom.authservice.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import pl.tom.authservice.model.User;

import java.util.Date;

@Component
public class TokenGenerator {

    public String createToken(User user) {
        long currentTimeMillis = System.currentTimeMillis();

        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("password", user.getPassword())
                .claim("role", user.getRole())
                .setIssuedAt(new Date(currentTimeMillis))
                .setExpiration(new Date(currentTimeMillis + 300000))
                .signWith(SignatureAlgorithm.HS512, "BS*z_=D8{(o%{*X")
                .compact();
    }
}
