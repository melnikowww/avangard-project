package com.example.avangardpotolki.controller;

import com.example.avangardpotolki.model.ContactRoof;
import com.example.avangardpotolki.service.CrmService;
import com.example.avangardpotolki.model.Contact;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class CrmController {

    private final CrmService crmService;

    public CrmController(CrmService crmService) {
        this.crmService = crmService;
    }

    @PostMapping("/new_contact_roof")
    public ResponseEntity<String> newContactRoof(@RequestBody ContactRoof contact) {
        return crmService.addNewContactRoof(contact);
    }

    @PostMapping("/new_contact")
    public ResponseEntity<String> newContact(@RequestBody Contact contact) {
        return crmService.addNewContact(contact);
    }

}
