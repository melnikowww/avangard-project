package com.example.avangardpotolki.config;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Slf4j
@Configuration
public class CorsConfig {

    // private final String publicDomain;
    //
    // public CorsConfig(@Value("${secrets.public-domain}") String domain) {
    //     this.publicDomain = domain;
    // }
    //
    // @Bean
    // public CorsFilter corsFilter() {
    //     CorsConfiguration config = new CorsConfiguration();
    //
    //     log.info(List.of(publicDomain).toString());
    //
    //     config.setAllowedOrigins(List.of(publicDomain));
    //     config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    //     config.setAllowedHeaders(List.of("Authorization", "Content-Type", "X-Requested-With", "Accept"));
    //     config.setAllowCredentials(true);
    //     config.setMaxAge(3600L);
    //
    //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //     source.registerCorsConfiguration("/**", config);
    //
    //     return new CorsFilter(source);
    // }
}
