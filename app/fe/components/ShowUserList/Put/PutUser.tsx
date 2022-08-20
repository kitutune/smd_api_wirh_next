import axios from "axios";
import { useCallback } from "react";

// export const usePutUser = (props) => {
export const usePutUser = () => {
  // DBにformから受け取った値を登録（INSERT）するメソッド
  const dbEdited = useCallback((formUser) => {
    console.log("editformUser", formUser);

    axios
      .put(`http://localhost:8080/api/user/edit/${formUser.id}`, formUser, {
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

  return dbEdited;
};
