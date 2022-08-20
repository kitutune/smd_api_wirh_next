package com.smd.api.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.smd.api.entity.UserEntity;
import com.smd.api.form.UserForm;
import com.smd.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository uRepository;

    @Override
    public UserForm saveUser(UserForm uForm) {
        // saveUserの機能を実装
        UserEntity uEntity = new UserEntity();
        // 受け取った値をEntityにコンバート
        BeanUtils.copyProperties(uForm, uEntity);
        uRepository.save(uEntity);
        return uForm;
    }

    @Override
    public List<UserEntity> getAllUsers() {
        // getAllUsersの機能を実装
        // まずEntityにDBから取得して代入
        // List<UserEntity> uEntities = uRepository.findAll();
        // List<UserForm> uForms = uEntities.stream().map(
        // uEntitiy -> new UserForm(
        // uEntitiy.getId(), uEntitiy.getName(), uEntitiy.getAge(), uEntitiy.getTodo(),
        // uEntitiy.getemail()))
        // .collect(Collectors.toList());
        // return uForms;
        // System.out.println(uEntities);
        return uRepository.findAll();
    }

    @Override
    public UserForm getUserById(Integer id) {
        // getUserByIdの機能を実装
        UserEntity uEntity = uRepository.findById(id).get();
        UserForm uForm = new UserForm();
        BeanUtils.copyProperties(uEntity, uForm);

        return uForm;
    }

    @Override
    public boolean deleteUser(Integer id) {
        // deleteUserの機能を実装
        UserEntity uEntity = uRepository.findById(id).get();
        uRepository.delete(uEntity);
        return true;
    }

    @Override
    public UserForm updateUser(Integer id, UserForm uForm) {
        System.out.println("サービスでユーザーを編集");
        System.out.println(uForm);
        // updateUserの機能を実装
        UserEntity uEntity = uRepository.findById(id).get();
        System.out.println("サービスでユーザーエンティティを取得");
        System.out.println(uEntity);
        System.out.println(uEntity.getName());
        uEntity.setName(uForm.getName());
        uEntity.setAge(uForm.getAge());
        uEntity.setEmail(uForm.getEmail());
        uEntity.setTodo(uForm.getTodo());
        System.out.println("サービスでユーザーエンティティを書き換え");
        System.out.println(uEntity.getName());
        return uForm;
    }

}
