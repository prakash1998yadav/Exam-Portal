package com.jwt.example.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.jwt.example.security.JWTAuthenticationFilter;
import com.jwt.example.security.JwtAuthenticationEntryPoint;
import com.jwt.example.service.UserDetailsServiceImpl;

@Configuration
public class SecurityConfig {


	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
    @Autowired
    private JwtAuthenticationEntryPoint point;
    @Autowired
    private JWTAuthenticationFilter filter;
    
//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf -> csrf.disable())
        			.cors(cors -> cors.disable())
                .authorizeHttpRequests(auth -> auth               
                		.requestMatchers("/generate-token","/user/create-user").permitAll()
                		.requestMatchers(HttpMethod.OPTIONS).permitAll()
                
                .anyRequest()
                .authenticated())
                .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
    
    
protected void configure(AuthenticationManagerBuilder auth) throws Exception{
	auth.userDetailsService(this.userDetailsServiceImpl).passwordEncoder(passwordEncoder());
}
    
@Bean
public BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
   
  //  requestMatchers("/home/**").authenticated()
}