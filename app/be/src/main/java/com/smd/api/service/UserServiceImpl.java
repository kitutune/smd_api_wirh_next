package com.smd.api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.smd.api.entity.UserEntity;
import com.smd.api.form.UserForm;
import com.smd.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository uRepository;

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
    public List<UserForm> getAllUsers() {
        // getAllUsersの機能を実装
        // まずEntityにDBから取得して代入
        List<UserEntity> uEntities = uRepository.findAll();
        List<UserForm> uForms = uEntities.stream().map(
                uEntitiy -> new UserForm(
                        uEntitiy.getId(), uEntitiy.getName(), uEntitiy.getAge(), uEntitiy.getPassword(),
                        uEntitiy.getMailaddress()))
                .collect(Collectors.toList());
        return uForms;
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
        // updateUserの機能を実装
        UserEntity uEntity = uRepository.findById(id).get();
        uEntity.setName(uForm.getName());
        uEntity.setAge(uForm.getAge());
        uEntity.setMailaddress(uForm.getMailaddress());
        // password外すべきか？
        return uForm;
    }

}
