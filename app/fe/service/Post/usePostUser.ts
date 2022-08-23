import axios from "axios";
import { useCallback, useEffect } from "react";

export const usePostUser = () => {
  // java側でPOSTメソッドを実装しているURL
  const BASEURL = "http://localhost:8080/api/regist/user";
  // DBにformから受け取った値を登録（INSERT）するメソッド
  const dbRegistered = useCallback((formUser) => {
    axios
      .post(BASEURL, formUser, {
        // デフォルト値がapplication/jsonなので記述必要なし
        // headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("登録成功");
        }

        console.log(response.status);
        console.log(response.data);
      });
  }, []);

  // useEffect(() => {
  //   if (formUser.name === "" || formUser.email === "") {
  //     return console.log("空の値は登録できません");
  //   }
  //   console.log("登録します");
  //   dbRegistered(formUser);
  // }, [formUser]);

  return dbRegistered;
};
