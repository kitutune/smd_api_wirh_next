package com.smd.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smd.api.entity.UserEntity;
import com.smd.api.form.UserForm;
import com.smd.api.service.UserServiceImpl;

import lombok.AllArgsConstructor;
// import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@CrossOrigin(value = "http://localhost:3000")
@RestController
// @RequestMapping
// @NoArgsConstructor
// @AllArgsConstructor
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private final UserServiceImpl userServiceImpl;

    @PostMapping("/users")
    public UserForm saveUser(@RequestBody UserForm user) {
        return userServiceImpl.saveUser(user);
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        // public String getAllUsers() {
        return userServiceImpl.getAllUsers();
        // return "hello world";
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserForm> getUserById(@PathVariable("id") Integer id) {
        UserForm user = null;
        user = userServiceImpl.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable("id") Integer id) {
        boolean deleted = false;
        deleted = userServiceImpl.deleteUser(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<UserForm> updateUser(@PathVariable("id") Integer id,
            @RequestBody UserForm user) {
        user = userServiceImpl.updateUser(id, user);
        return ResponseEntity.ok(user);
    }

}
