// 登録前のユーザー
// formで入力されているデータなのでまだidはなく必須項目以外はundefined許容
export type UsersBeforeRegistration = {
  id?: string;
  name: string;
  age?: string;
  email?: string;
  todo: string;
};

// 既に登録されているユーザー
export type RegisteredUsers = {
  id: string;
  name: string;
  age: string;
  email: string;
  todo: string;
};
