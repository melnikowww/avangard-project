package com.example.avangardpotolki.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class StaticController {

    @GetMapping(path = "/")
    public String mainPage() {
        return "forward:/index.html";
    }

    @GetMapping(path="/ceiling")
    public String potolkiPage() {
        return "forward:/potolki/index.html";
    }
}
