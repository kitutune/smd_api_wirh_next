import { Button, Center, Group, TextInput } from "@mantine/core";
import { editUserState } from "atom/PUT/EditUser";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useUserForm } from "service/Form/useUserForm";
import { RegisteredUsers } from "types/user";
import { usePostUser } from "../service/Post/usePostUser";
import { usePutUser } from "../service/Put/usePutUser";

export const UserForm = () => {
  // useHook
  const dbEdited = usePutUser();
  const dbRegistered = usePostUser();
  const form = useUserForm();

  // Recoil
  const recoilEditUser = useRecoilValue(editUserState);
  console.log("使う側のRecol", recoilEditUser);

  // UserFormでformの状態を管理するための変数
  const [formUser, setFormUser] = useState({
    id: "",
    name: "",
    age: "",
    todo: "",
    email: "",
    // termsOfService: false,
  });

  const getFormUser = form.onSubmit((values) => {
    console.log("values", values);
    setFormUser(values);
  });

  const editUserToForm = (recoilEditUser: RegisteredUsers) => {
    form.setValues({
      id: recoilEditUser.id,
      name: recoilEditUser.name,
      age: recoilEditUser.age,
      todo: recoilEditUser.todo,
      email: recoilEditUser.email,
    });
  };

  // 編集データを補完するrecoilEditUserに値が取得された際に
  // formに編集データをセットするかの分岐処理
  useEffect(() => {
    // ログでどう分岐されるか見るよう // 普段はコメントアウト
    console.log(recoilEditUser);
    console.log(!recoilEditUser);
    console.log(!!recoilEditUser);
    // ①必須項目である名前が空文字なら既に登録されているデータとして
    // 存在しているのは異常なので何もせずに返す
    if (recoilEditUser.name === "") {
      console.log("中身が空");
      return;
    }
    // ② ①以外の場合は編集データとして扱う
    editUserToForm(recoilEditUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recoilEditUser]);

  // formに値がセットされた際にどう処理するか分岐させる
  useEffect(() => {
    // ①必須項目が空文字なら処理せず返す
    if (formUser.name === "" || formUser.email === "") {
      return console.log("空の値は登録できません");
    }
    // ②編集データを補完するrecoilEditUserにデータが存在するなら編集データとして処理する
    if (!(recoilEditUser.id === "")) {
      console.log("編集します");
      console.log("編集後の内容", formUser);
      dbEdited(formUser);
    } else {
      // ③上記条件以外なら新規登録として扱う
      console.log("新規登録します");
      dbRegistered(formUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formUser]);

  // 記事用に置く 「バリデート入れるとvalueで値表示できない」
  // const [value, setValue] = useState(
  //   "validateを使うとvalueで値を表示できなくなる"
  // );
  return (
    <div className="mt-20">
      <Center>
        <form onSubmit={getFormUser}>
          {/* 記事用に置く 「バリデート入れるとvalueで値表示できない」*/}
          {/* <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          /> */}
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
            {/* formのresetはシンプルなコードなので直書き */}
            <Button className="bg-black" onClick={() => form.reset()}>
              Reset
            </Button>
          </Group>
        </form>
      </Center>
    </div>
  );
};
