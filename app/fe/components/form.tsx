import { Button, Center, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { editUserState } from "atom/PUT/EditUser";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { usePostUser } from "../service/Post/usePostUser";
import { usePutUser } from "../service/Put/usePutUser";

export const UserForm = () => {
  const recoilEditUser = useRecoilValue(editUserState);
  console.log("使う側のRecol", recoilEditUser);

  const [formUser, setFormUser] = useState({
    id: "",
    name: "",
    age: "",
    todo: "",
    email: "",
    // termsOfService: false,
  });

  const dbEdited = usePutUser();
  const dbRegistered = usePostUser();

  const form = useForm({
    initialValues: {
      id: "",
      name: "",
      age: "",
      todo: "",
      email: "",
      // termsOfService: false,
    },

    validate: {
      name: (name_value) =>
        name_value.length < 1 ? "名前は必須入力です" : null,
      age: (age_value) =>
        age_value.length == 0
          ? null
          : /(^\d?\d{1}$)|(^1[0-4]{1}\d{1}$)|(^150$)/.test(age_value)
          ? null
          : "年齢は数字で150以下で入力してください",
      todo: (todo_value) =>
        todo_value.length < 1 ? "todoは必須入力です" : null,
      email: (mail_value) =>
        mail_value.length === 0
          ? null
          : /^\S+@\S+$/.test(mail_value)
          ? null
          : "メールアドレス形式で入力してください",
    },
  });

  const getFormUser = form.onSubmit((values) => {
    console.log("values", values);
    setFormUser(values);
  });

  const editUserToForm = () => {
    form.setValues({
      id: recoilEditUser.id,
      name: recoilEditUser.name,
      age: recoilEditUser.age,
      todo: recoilEditUser.todo,
      email: recoilEditUser.email,
    });
  };
  useEffect(() => {
    console.log(recoilEditUser);
    console.log(!recoilEditUser);
    console.log(!!recoilEditUser);
    if (recoilEditUser.name === "") {
      console.log("中身が空");
      return;
    }
    editUserToForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recoilEditUser]);

  useEffect(() => {
    if (formUser.name === "" || formUser.email === "") {
      return console.log("空の値は登録できません");
    }
    if (recoilEditUser) {
      console.log("編集します");
      console.log("編集後の内容", formUser);
      dbEdited(formUser);
    } else {
      console.log("新規登録します");
      dbRegistered(formUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formUser]);
  const [value, setValue] = useState(
    "validateを使うとvalueで値を表示できなくなる"
  );
  return (
    <div className="mt-20">
      <Center>
        <form onSubmit={getFormUser}>
          <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <TextInput
            // className="invisible"
            disabled
            label="id"
            placeholder="id"
            {...form.getInputProps("id")}
          />
          <TextInput
            label="名前"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            // required
            mt="md"
            label="年齢"
            placeholder="年齢を入力してください"
            {...form.getInputProps("age")}
          />
          <TextInput
            // required
            mt="md"
            label="todo"
            placeholder="適当な文字"
            {...form.getInputProps("todo")}
          />
          <TextInput
            // required
            mt="md"
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          {/* <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          /> */}

          <Group className="bg-blue" position="right" mt="md">
            {/* <Button
              className="bg-black"
              onClick={() => form.setFieldValue("name", "testUser2")}
            >
              変更2
            </Button> */}
            <Button className="bg-black" type="submit">
              Submit
            </Button>
          </Group>
        </form>
      </Center>
    </div>
  );
};
