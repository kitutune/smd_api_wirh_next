import { editUserState } from "atom/PUT/EditUser";
import axios from "axios";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

export const useGetUser = () => {
  // 状態を入力する側のRecoil
  const setRecoilEditUser = useSetRecoilState(editUserState);

  // userテーブルから取得
  const getUserById = useCallback(async (id) => {
    const response = await axios
      // java側でDELETEメソッドを実装しているURL、リクエスト先
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
        setRecoilEditUser(res.data);
        return res.data;
      });
    console.log("response", response);
    return response;
    // setUser(response.data);
  }, []);

  return getUserById;
};
