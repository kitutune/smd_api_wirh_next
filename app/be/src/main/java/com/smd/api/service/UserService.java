package com.smd.api.service;

import java.util.List;

import com.smd.api.entity.UserEntity;
import com.smd.api.form.UserForm;

// メソッド名だけ定義して後で継承してから機能を実装する
public interface UserService {
    UserForm saveUser(UserForm uForm);

    List<UserEntity> getAllUsers();

    UserForm getUserById(Integer id);

    boolean deleteUser(Integer id);

    UserForm updateUser(Integer id, UserForm uForm);
}
