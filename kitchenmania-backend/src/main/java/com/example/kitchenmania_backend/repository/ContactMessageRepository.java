package com.example.kitchenmania_backend.repository;

import com.example.kitchenmania_backend.model.ContactMessage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends MongoRepository<ContactMessage, String> {
}
