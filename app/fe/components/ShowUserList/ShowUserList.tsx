import React, { useEffect, useState } from "react";

export const ShowUserList = () => {
  const BASEURL = "localhost:8080/users";
  const [userList, setUserList] = useState();
  const getUserList = async () => {
    // 一旦フェッチで試す
    const response = await fetch(BASEURL, {
      method: "GET",
    });
    if (response.ok) {
      return response.json();
    } else {
      console.log("ResponseError");
      console.log("ステータス", response.status);
      console.log("ステータステキスト", response.statusText);

      return {};
    }
    // console.log(response);
  };

  // useEffect(() => {
  //   if (!getUserList) return;
  //   setUserList(getUserList());
  // }, []);
  console.log(userList);

  return (
    <>
      <button onClick={getUserList()}>ゆーざーりすと</button>
      <div>ShowUserList</div>
    </>
  );
};
