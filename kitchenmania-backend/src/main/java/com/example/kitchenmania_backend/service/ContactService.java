package com.example.kitchenmania_backend.service;

import com.example.kitchenmania_backend.model.ContactMessage;
import com.example.kitchenmania_backend.repository.ContactMessageRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ContactService {
    @Autowired
    private  final ContactMessageRepository repo;

    public ContactMessage save(ContactMessage cm) {
        return repo.save(cm);
    }
}
