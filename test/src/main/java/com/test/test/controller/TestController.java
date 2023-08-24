package com.test.test.controller;

import com.test.test.entity.Test;
import com.test.test.service.TestService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
@Controller
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class TestController {

    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/test")
    @ResponseBody
    public List<Test> getAllPosts() {
        return testService.getAllPosts();
    }
}
