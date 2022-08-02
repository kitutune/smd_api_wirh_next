package com.smd.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smd.api.entity.AccountEntity;
import com.smd.api.service.AccountService;

import java.util.List;

@RestController
@RequestMapping("account")
public class AccountController {
    @Autowired
    AccountService accountService;

    /**
     * リクエスト例:
     * curl http://localhost:8080/account/getAccount
     * @return
     */
    @GetMapping("/getAccount")
    List<AccountEntity> getAccount() {
        return accountService.getAccount();
    }

    /**
     * formタグからaccountEntityを受け取ってDBに登録する。
     * 
     * リクエスト例:
     *   JSON:
     *     curl http://localhost:8080/account/updateAccount -X PUT -H "Content-Type: application/json" -d '{"user_name": "sig", "password": "hogehoge", "email": "hogehoge@fuge.com"}'
     *   FORM:
     *     // formタグから直接送信するときには、Content-Type: application/x-www-form-urlencoded なので、@RequestBody ではなく @ModelAttribute で実装する必要がある。
     *     curl http://localhost:8080/account/updateAccount -X PUT -H "Content-Type: application/x-www-form-urlencoded" -d "user_name=sig&password=hogehoge&email=hogehoge@fuge.com"
     * 
     * @param accountEntity
     * @return
     */
    @PutMapping("/updateAccount")
    String updateAccount(@RequestBody AccountEntity accountEntity) {
        accountService.updateAccount(accountEntity);
        return "success";
    }

    /**
     * リクエスト例:
     *   FORM: 
     *     curl http://localhost:8080/account/updateAccount/101 -X PUT -H "Content-Type: application/x-www-form-urlencoded" -d "user_name=sigsig&password=hogehoge&email=hogehoge@fuge.com"
     * @param accountEntity
     * @return
     */
    @PutMapping("/updateAccount/{hoge}")
    String updateAccountById(@PathVariable String hoge, @ModelAttribute AccountEntity accountEntity) {
        accountService.updateAccount(accountEntity);
        return "success";
    }

    /**
     * リクエスト例:
     * curl -X DELETE http://localhost:8080/account/deleteAllAccount
     * 
     * @return
     */
    @DeleteMapping("/deleteAllAccount")
    String deleteAllAccount() {
        accountService.deleteAllAccount();
        return "success";
    }
}
