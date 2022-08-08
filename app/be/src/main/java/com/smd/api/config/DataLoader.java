package com.smd.api.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.smd.api.entity.UserEntity;
import com.smd.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class DataLoader implements ApplicationRunner {

    private final UserRepository repository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        UserEntity uEntity = new UserEntity();
        uEntity.setName("たろう");
        uEntity.setId(1);
        uEntity.setMailaddress("abcd@abc.com");
        uEntity.setAge(19);
        repository.save(uEntity);

        // UserEntity uEntity = new UserEntity();
        uEntity.setName("かける");
        uEntity.setId(2);
        uEntity.setMailaddress("bbbb@abc.com");
        uEntity.setAge(25);
        repository.save(uEntity);

        uEntity.setName("まるこめ");
        uEntity.setId(3);
        uEntity.setMailaddress("cccc@abc.com");
        uEntity.setAge(35);
        repository.save(uEntity);

        // var development = new Department();
        // development.setName("開発");
        // repository.save(development);
    }
}