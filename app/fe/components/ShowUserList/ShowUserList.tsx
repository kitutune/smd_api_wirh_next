import React from "react";
import { RegisteredUsers } from "types/user";
import { useGetUserList } from "../../service/Get/useGetUserList";
import { UsersList } from "./UserList";

export const ShowUserList = () => {
  // useHookであるuseGetUserListのuserListを受け取る
  const userList:RegisteredUsers[] = useGetUserList();

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
