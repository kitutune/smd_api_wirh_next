import {
  // Avatar,
  Table,
  Group,
  Text,
  // ActionIcon,
  Menu,
  ScrollArea,
} from "@mantine/core";
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

// export function UsersList({ data }: UsersStackProps) {
export const UsersList = (props) => {
  // useEffect(() => {
  //   if (!data) return;
  //   console.log(Object.entries(data));
  // }, []);
  // const list = props
  console.log("child", props);
  // console.log("child",list.data);
  const rows = props.data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          {/* <Avatar size={40} src={item.avatar} radius={40} /> */}
          <div>
            <Text size="sm" weight={500}>
              {item.name}
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
          Rate
        </Text>
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
