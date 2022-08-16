import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useGetUserList } from "./Get/GetUserList";
import { UsersList } from "./UserList";

export const ShowUserList = () => {
  const userList = useGetUserList();
  // const BASEURL = "http://localhost:8080/api/users";
  // // const BASEURL = "localhost:8080/api/test";
  // const [userList, setUserList] = useState([
  //   {
  //     id: "",
  //     name: "",
  //     age: "",
  //     email: "",
  //     todo: "",
  //   },
  // ]);
  // // userテーブルから取得
  // const getUserList = useCallback(async () => {
  //   const response = await axios.get(BASEURL).catch((error) => {
  //     // レスポンスありのエラーハンドリング（実際には必要に応じた例外処理を実装する）
  //     console.log(
  //       `Error! code: ${error.response.status}, message: ${error.message}`
  //     );
  //     // return error.response;
  //   });
  //   // return response.data;
  //   setUserList(response.data);
  // }, []);

  // // // 実行結果
  // // getUserList().then((userlist) => {
  // //   setUserList(userlist);

  // //   console.log(userlist.length);
  // // });
  // console.log("レンダリング");
  // console.log(userList);
  // console.log(userList.length);
  // console.log(userList[0].id);
  // console.log(userList[0].id === "");

  // if (!(userList[0].id === "")) {
  //   console.log("変換", Object.entries(userList));
  // }

  // useEffect(() => {
  //   getUserList();
  // }, []);
  return (
    <>
      {/* <button onClick={getUserList()}>ゆーざーりすと</button> */}
      <div>ShowUserList</div>
      {!(userList[0].id === "") ? <UsersList data={userList} /> : null}
    </>
  );
};
