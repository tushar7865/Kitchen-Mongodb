package com.example.kitchenmania_backend.controller;

import com.example.kitchenmania_backend.model.Recipe;
import com.example.kitchenmania_backend.service.RecipeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {
    private final RecipeService service;

    @GetMapping
    public List<Recipe> getAll() {
        return service.getAllRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getById(@PathVariable String id) {
        return service.getRecipeById(id)
                .orElseThrow(() -> new RuntimeException("Recipe not found with id " + id));
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return service.createRecipe(recipe);
    }

    @PutMapping("/{id}")
    public Recipe update(@PathVariable String id, @RequestBody Recipe recipe) {
        return service.updateRecipe(id, recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.deleteRecipe(id);
    }
}
