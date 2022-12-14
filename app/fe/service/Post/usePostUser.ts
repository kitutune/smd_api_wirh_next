import axios from "axios";
import { useCallback } from "react";
import { UsersBeforeRegistration } from "types/user";

export const usePostUser = () => {
  // java側でPOSTメソッドを実装しているURL
  const BASEURL = "http://localhost:8080/api/regist/user";
  // DBにformから受け取った値を登録（INSERT）するメソッド
  const dbRegistered = useCallback(
    async (formUser: UsersBeforeRegistration) => {
      const response = await axios.post(BASEURL, formUser, {
        // デフォルト値がapplication/jsonなので記述必要なし
        // headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log("登録成功");
      }

      console.log(response.status);
      console.log(response.data);
    },
    []
  );

  return dbRegistered;
};

// then
// export const usePostUser = () => {
//   // java側でPOSTメソッドを実装しているURL
//   const BASEURL = "http://localhost:8080/api/regist/user";
//   // DBにformから受け取った値を登録（INSERT）するメソッド
//   const dbRegistered = useCallback((formUser: UsersBeforeRegistration) => {
//     axios
//       .post(BASEURL, formUser, {
//         // デフォルト値がapplication/jsonなので記述必要なし
//         // headers: { "Content-Type": "application/json" },
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           console.log("登録成功");
//         }

//         console.log(response.status);
//         console.log(response.data);
//       });
//   }, []);

//   return dbRegistered;
// };
