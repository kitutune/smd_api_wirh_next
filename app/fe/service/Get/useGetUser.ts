import axios from "axios";
import { useCallback } from "react";

// useHookであるusePutUser自体には引数は必要ない
export const useGetUser = () => {
  // userテーブルから取得
  const getUserById = useCallback(async (id: string) => {
    const response = await axios
      // java側でDELETEメソッドを実装しているURL、リクエスト先
      .get(`http://localhost:8080/api/user/${id}`)
      .catch((error) => {
        // レスポンスありのエラーハンドリング（実際には必要に応じた例外処理を実装する）
        console.log(
          `Error! code: ${error.response.status}, message: ${error.message}`
        );
        return error.response;
      })
      .then((res) => {
        console.log("res.data", res.data);
        // return res.data;
        return res;
      });
    console.log("response", response);
    return response;
    // setUser(response.data);
  }, []);

  return getUserById;
};
