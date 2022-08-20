import { Table, Group, Text, ScrollArea } from "@mantine/core";
import { useDeleteUser } from "./Delete/DeleteUser";
import { useGetUser } from "./Get/GetUser";

export const UsersList = (props) => {
  // useHookであるuseDeleteUserのdeleteUserメソッドを呼び出す
  const deleteUser = useDeleteUser();
  //deleteUserにidを渡すためだけのonClickメソッド
  const deleteClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute("delete_user_id");
    // 取得したidを渡す
    deleteUser(id);
  };

  // useHookであるuseGetUserのgetUserByIdメソッドを呼び出す
  const getUserById = useGetUser();
  // getUserByIdにidを渡すためだけのonClickメソッド
  const editClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute("edit_user_id");
    // 取得したidを渡す
    getUserById(id);
  };

  const rows = props.data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          {/* <Avatar size={40} src={item.avatar} radius={40} /> */}
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
        <button onClick={editClick} edit_user_id={item.id}>
          編集
        </button>
      </td>
      <td>
        <button onClick={deleteClick} delete_user_id={item.id}>
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
