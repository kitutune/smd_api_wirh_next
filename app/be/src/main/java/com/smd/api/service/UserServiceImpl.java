package com.smd.api.service;

import java.util.List;
import java.util.stream.Collector;
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

    // @Override
    // public List<UserForm> getAllUsers() {
    // // getAllUsersの機能を実装
    // // まずEntityにDBから取得して代入
    // List<UserEntity> uEntities = uRepository.findAll();
    // List<UserFrom> uFroms = uEntities.stream().map(uEntities -> new UserForm(
    // uEntities.getId(), uEntities.getName(), uEntities.getAge(),
    // uEntities.getMailaddress()

    // )).collect(Collectors.tolist());
    // return uFroms;
    // }

    @Override
    public UserForm getUserById(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean deleteUser(Integer id) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public UserForm updateUser(Long id, UserForm uForm) {
        // TODO Auto-generated method stub
        return null;
    }

}
