import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useGetUserList } from "./Get/GetUserList";
import { UsersList } from "./UserList";
const swichDisplay = (userList) => {
  switch (userList) {
    // case userList.length === 0:
    case true:
      console.log("karakarakara");

      return <>ユーザーリストは空です</>;

    default:
      return (
        <>
          <UsersList data={userList} />
        </>
      );
  }
};

export const ShowUserList = () => {
  const userList = useGetUserList();
  console.log(userList);
  console.log(userList === []);
  console.log(!(userList === []));
  console.log(userList.length);

  // useEffect(() => {
  //   if(userList===[]){
  //     return <>ユーザーリストは空です</>
  //   }
  // }, [userList])

  return (
    <>
      {/* <button onClick={getUserList()}>ゆーざーりすと</button> */}
      {/* <div>ShowUserList</div>
      {!(userList[0].id === "") ? <UsersList data={userList} /> : null} */}
      {/* {swichDisplay(userList)} */}
      {console.log(UsersList)}
      {console.log(UsersList.length)}
      {console.log(UsersList.length === 0)}
      {UsersList.length > 0 ? (
        <UsersList data={userList} />
        ) : (
        <>ユーザーリストは空です</>
      )}
    </>
  );
};
