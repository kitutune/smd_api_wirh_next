import { Table, Group, Text, ScrollArea } from "@mantine/core";
import { editUserState } from "atom/PUT/EditUser";
import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { RegisteredUsers } from "types/user";
import { useDeleteUser } from "../../service/Delete/useDeleteUser";
import { useGetUser } from "../../service/Get/useGetUser";
// import { useDeleteUser } from "./Delete/useDeleteUser";
// import { useGetUser } from "./Get/useGetUserr

type Props = {
  data: RegisteredUsers[];
  children?: React.ReactNode;
};

export const UsersList: FC<Props> = (props) => {
  // 状態を入力する側のRecoil
  const setRecoilEditUser = useSetRecoilState(editUserState);
  // useHookであるuseDeleteUserのdeleteUserメソッドを呼び出す
  const deleteUser = useDeleteUser();
  // 削除ボタン
  const fetchDeleteUserId = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute("data-delete_user_id");
    // nullの可能性を排除
    if (!id) {
      return;
    }
    // 取得したidを渡す
    deleteUser(id);
  },[])

  // useHookであるuseGetUserのgetUserByIdメソッドを呼び出す
  const getUserById = useGetUser();
  // 編集ボタン
  const fetchEditUserId = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
    // ①押した変種ボタンからedit_user_idに格納されているidを取得
    const id = e.currentTarget.getAttribute("data-edit_user_id");
    if (!id) {
      return;
    }
    // ② ①で取得したidからユーザーデータを取得する awaitがなければ③がユーザーデーターを取得する前に実行され失敗する
    const response = await getUserById(id);
    // ③ ②で取得したデータがちゃんと取れてきているかステータスが200になっているかで確認する(コンソールで見ると中に何が入っているかわかる)
    console.log("responseの中身:", response);
    if (response.status == 200) {
      // ④ 成功していたらRecoilのeditUserStateに返ってきたレスポンスのデータを格納する
      setRecoilEditUser(response.data);
    } else {
      // ⑤失敗時の処理
      console.log(
        `データの取得に失敗しました：response.statusは${response.status}です`
      );
    }
  },[]);

  const rows = props.data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <div>
            <Text size="sm" weight={500}>
              {item.name} {item.id}
            </Text>
            <Text color="dimmed" size="xs">
              {item.age}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{item.email}</Text>
        <Text size="xs" color="dimmed">
          Email
        </Text>
      </td>
      <td>
        <Text size="sm">{item.todo}</Text>
        <Text size="xs" color="dimmed">
          Todo
        </Text>
      </td>
      <td>
        <button onClick={fetchEditUserId} data-edit_user_id={item.id}>
          編集
        </button>
      </td>
      <td>
        <button onClick={fetchDeleteUserId} data-delete_user_id={item.id}>
          削除
        </button>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="md">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
