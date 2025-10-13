package com.example.avangardpotolki.service;

import com.example.avangardpotolki.model.Contact;
import com.example.avangardpotolki.model.ContactRoof;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CrmService {

    private final String webhookUrlRoof;
    private final String webhookUrl;

    public CrmService(@Value("${secrets.webhook-url-roof}") String urlRoof,
                      @Value("${secrets.webhook-url}") String url) {
        this.webhookUrlRoof = urlRoof;
        this.webhookUrl = url;
    }

    public ResponseEntity<String> addNewContactRoof(ContactRoof contact) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.postForLocation(webhookUrlRoof, contact);
        return ResponseEntity.ok("");
    }

    public ResponseEntity<String> addNewContact(Contact contact) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.postForLocation(webhookUrl, contact);
        return ResponseEntity.ok("");
    }
}
