import { Button, Center, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export const UserForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      age: "",
      password: "",
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
      password: (pass_value) =>
        pass_value.length < 1 ? "passwordは必須入力です" : null,
      email: (mail_value) =>
        mail_value.length === 0
          ? null
          : /^\S+@\S+$/.test(mail_value)
          ? null
          : "メールアドレス形式で入力してください",
    },
  });
  // console.log(form);

  return (
    <div className="mt-20">
      <Center>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
            label="password"
            placeholder="適当な文字"
            {...form.getInputProps("password")}
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
            <Button className="bg-black" type="submit">
              Submit
            </Button>
          </Group>
        </form>
      </Center>
    </div>
  );
};
