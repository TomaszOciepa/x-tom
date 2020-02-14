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
                .setSubject(user.getUser_email())
                .claim("password", user.getUser_password())
                .claim("role", user.getUser_role())
                .setIssuedAt(new Date(currentTimeMillis))
                .setExpiration(new Date(currentTimeMillis + 30000))
                .signWith(SignatureAlgorithm.HS512, "BS*z_=D8{(o%{*X")
                .compact();
    }
}
