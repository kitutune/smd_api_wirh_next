package com.smd.api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class UserEntity {
    @NotNull
    @Id
    private Integer id;
    @NotNull
    private String name;
    private int age;
    private String password;
    private String mailaddress;

}