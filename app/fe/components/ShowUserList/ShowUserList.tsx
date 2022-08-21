import React from "react";
import { User } from "types/user";
import { useGetUserList } from "./Get/GetUserList";
import { UsersList } from "./UserList";

export const ShowUserList = () => {
  // useHookであるuseGetUserListのuserListを受け取る
  const userList:User[] = useGetUserList();

  return (
    <>
      {UsersList.length > 0 ? (
        <UsersList data={userList} />
      ) : (
        <>ユーザーリストは空です</>
      )}
    </>
  );
};
