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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smd.api.entity.UserEntity;
import com.smd.api.form.UserForm;
import com.smd.api.service.UserServiceImpl;

// import lombok.AllArgsConstructor;
// import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@RequestMapping("/api")
// @NoArgsConstructor
// @AllArgsConstructor
// @CrossOrigin(value = "http://localhost:3000")
// @CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private final UserServiceImpl userServiceImpl;

    @PostMapping("/regist/user")
    public UserForm saveUser(@RequestBody UserForm user) {
        System.out.println("入力あり");
        System.out.println(user);
        return userServiceImpl.saveUser(user);
    }

    @GetMapping("/test")
    public String getTest() {
        return "test";
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        System.out.println("全てのユーザーデータを取得");
        return userServiceImpl.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserForm> getUserById(@PathVariable("id") Integer id) {
        System.out.println("idからユーザーデータを取得");
        UserForm user = null;
        user = userServiceImpl.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUserById(@PathVariable("id") Integer id) {
        boolean deleted = false;
        System.out.println("IDを取得し削除");
        System.out.println(id);
        deleted = userServiceImpl.deleteUser(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        System.out.println(response);
        return ResponseEntity.ok(response);
    }
    // @DeleteMapping("/user/{id}")
    // public ResponseEntity<Map<String, Boolean>>
    // deleteEmployee(@PathVariable("id") Integer id) {
    // boolean deleted = false;
    // deleted = userServiceImpl.deleteUser(id);
    // Map<String, Boolean> response = new HashMap<>();
    // response.put("deleted", deleted);
    // return ResponseEntity.ok(response);
    // }

    @PutMapping("/user/edit/{id}")
    public ResponseEntity<UserForm> updateUser(@PathVariable("id") Integer id,
            @RequestBody UserForm user) {
        System.out.println("IDからユーザーを取得して編集");
        System.out.println(user);
        System.out.println(user.getName());
        user = userServiceImpl.updateUser(id, user);
        return ResponseEntity.ok(user);
    }

}
