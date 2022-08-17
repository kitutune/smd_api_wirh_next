import {
  // Avatar,
  Table,
  Group,
  Text,
  // ActionIcon,
  Menu,
  ScrollArea,
} from "@mantine/core";
import axios from "axios";
import { useDeleteUser } from "./Delete/DeleteUser";
// import { useEffect } from "react";
// import {
//   IconPencil,
//   IconMessages,
//   IconNote,
//   IconReportAnalytics,
//   IconTrash,
//   IconDots,
// } from '@tabler/icons';

// interface UsersStackProps {
//   data: {
//     avatar: string;
//     name: string;
//     job: string;
//     email: string;
//     rate: number;
//   }[];
// }

export const UsersList = (props) => {
  // useHookに引数を渡す形にしているが肝心のidはクリックイベントのためonClickの外には存在しない
  // なので形だけの引数が必要なので何も要素を持たないidを宣言（邪道かも？）
  let id;
  // useHook呼び出し、引数にidを渡す
  const deleteUser = useDeleteUser(id);
  // useHookであるuseDeleteUserのdeleteUserにidを渡すためだけのonClickメソッド
  const deleteClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute("user_id");
    deleteUser(id);
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
        <button>編集</button>
      </td>
      <td>
        <button onClick={deleteClick} user_id={item.id}>
          削除
        </button>
      </td>
      <td>
        <Group spacing={0} position="right">
          {/* <ActionIcon>
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon> */}
          <Menu transition="pop" withArrow position="bottom-end">
            {/* <Menu.Target>
              <ActionIcon>
                <IconDots size={16} stroke={1.5} />
              </ActionIcon>
            </Menu.Target> */}
            <Menu.Dropdown>
              <Menu.Item
              //   icon={<IconMessages size={16} stroke={1.5} />}
              >
                Send message
              </Menu.Item>
              <Menu.Item
              //   icon={<IconNote size={16} stroke={1.5} />}
              >
                Add note
              </Menu.Item>
              <Menu.Item
              //   icon={<IconReportAnalytics size={16} stroke={1.5} />}
              >
                Analytics
              </Menu.Item>
              <Menu.Item
              //   icon={<IconTrash size={16} stroke={1.5} />} color="red"
              >
                Terminate contract
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
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
