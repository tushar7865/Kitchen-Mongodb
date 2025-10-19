package com.example.kitchenmania_backend.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("recipes")
public class Recipe{
    @Id
    private String id;

    private String title;
    private Double price;
    private String img;
    private String chef;
    private String ingredients;
    private String instructions;
}
