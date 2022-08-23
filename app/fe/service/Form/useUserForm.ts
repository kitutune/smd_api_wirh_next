import { useForm } from "@mantine/form";

export const useUserForm = () => {
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

  return form;
};
