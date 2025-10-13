package com.example.avangardpotolki.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Contact {
    public String name;
    public String phone;
    public String message;
    public String email;
}
