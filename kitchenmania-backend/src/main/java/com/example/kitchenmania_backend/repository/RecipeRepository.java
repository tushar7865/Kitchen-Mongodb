package com.example.kitchenmania_backend.repository;

import com.example.kitchenmania_backend.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {
}
