import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
export const useGetUserList = () => {
  // java側でGETメソッドを実装しているURL、リクエスト先
  const BASEURL = "http://localhost:8080/api/users";
  // GETでかえってきた（応答があった、レスポンスがあった）DBのデータを補完するuseState
  const [userList, setUserList] = useState([
    {
      id: "",
      name: "",
      age: "",
      email: "",
      todo: "",
    },
  ]);
  // userテーブルから取得
  const getUserList = useCallback(async () => {
    const response: AxiosResponse = await axios.get(BASEURL).catch((error) => {
      // レスポンスありのエラーハンドリング（実際には必要に応じた例外処理を実装する）
      console.log(
        `Error! code: ${error.response.status}, message: ${error.message}`
      );
      return error.response;
    });
    setUserList(response.data);
    return response.data;
  }, []);

  useEffect(() => {
    getUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return userList;
};
