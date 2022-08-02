package com.smd.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hello")
public class HelloController {

    /**
     * GET通信で呼応するサンプルコード
     * 
     * @return Hello World
     */
    @RequestMapping(method = RequestMethod.GET)
    String get() {
        return "Hello world.";
    }

    /**
     * PUT通信で呼応するサンプルコード。
     * 
     * リクエスト例:
     *   curl http://localhost:8080/hello -X PUT -d "message1=hello&message2=world"
     * 
     * @param firstMessage
     * @param secondMessage
     * @return firstMessage + secondMessage
     */
    @RequestMapping(method = RequestMethod.PUT)
    String put(
        @RequestParam(name="message1") String firstMessage,
        @RequestParam(name="message2") String secondMessage
    ) {
        return firstMessage + ", " + secondMessage;
    }

    @GetMapping("/echo/{message}")
    String echo(@RequestParam(name="message") String message) {
        return message;
    }
}
