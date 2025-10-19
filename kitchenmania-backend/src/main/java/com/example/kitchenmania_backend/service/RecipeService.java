package com.example.kitchenmania_backend.service;

import com.example.kitchenmania_backend.model.Recipe;
import com.example.kitchenmania_backend.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public  class RecipeService {
    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }
    public Recipe updateRecipe(String id, Recipe recipe) {
        recipe.setId(id);
        return recipeRepository.save(recipe);
    }

    public void deleteRecipe(String id) {
        recipeRepository.deleteById(id);
    }

    public Optional<Recipe> getRecipeById(String id) {
        return recipeRepository.findById(id);
    }
}