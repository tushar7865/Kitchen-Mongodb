package com.example.kitchenmania_backend.controller;


import com.example.kitchenmania_backend.model.ContactMessage;
import com.example.kitchenmania_backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {
    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> create(@Valid @RequestBody ContactMessage m) {
        return ResponseEntity.ok(service.save(m));
    }
}
