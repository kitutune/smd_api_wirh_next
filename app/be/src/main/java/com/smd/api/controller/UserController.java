package com.smd.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.smd.api.service.UserService;

import lombok.AllArgsConstructor;
// import lombok.NoArgsConstructor;

@CrossOrigin(value = "http://localhost:3000/")
@RestController
// @RequestMapping
// @NoArgsConstructor
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/users")
    public UserForm saveUser(@RequestBody UserForm user) {
        return userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        // public String getAllUsers() {
        return userService.getAllUsers();
        // return "hello world";
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserForm> getUserById(@PathVariable("id") Integer id) {
        UserForm user = null;
        user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable("id") Integer id) {
        boolean deleted = false;
        deleted = userService.deleteUser(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserForm> updateUser(@PathVariable("id") Integer id,
            @RequestBody UserForm user) {
        user = userService.updateUser(id, user);
        return ResponseEntity.ok(user);
    }

}
