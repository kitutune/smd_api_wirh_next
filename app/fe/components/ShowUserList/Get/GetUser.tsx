import { editUserState } from "atom/PUT/EditUser";
import axios from "axios";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";

export const useGetUser = (id) => {
  const setRecoilEditUser = useSetRecoilState(editUserState);
  // java側でGETメソッドを実装しているURL、リクエスト先
  //    const BASEURL = "http://localhost:8080/api/users";
  // GETでかえってきた（応答があった、レスポンスがあった）DBのデータを補完するuseState
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    todo: "",
  });
  // userテーブルから取得
  const getUserById = useCallback(async (id) => {
    const response = await axios
      .get(`http://localhost:8080/api/user/${id}`)
      .catch((error) => {
        // レスポンスありのエラーハンドリング（実際には必要に応じた例外処理を実装する）
        console.log(
          `Error! code: ${error.response.status}, message: ${error.message}`
        );
        // return error.response;
      })
      .then((res) => {
        console.log("res.data", res.data);
        // setUser(res.data)
        setRecoilEditUser(res.data);
        return res.data;
      });
    console.log("response", response);

    return response;
    // setUser(response.data);
  }, []);

  return getUserById;
};
