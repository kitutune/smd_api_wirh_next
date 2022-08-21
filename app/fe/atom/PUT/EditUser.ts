import { atom } from "recoil";
// バケツリレーをしないためにRecoilを採用
// 編集するユーザーのデータを管理する変数を作成する
export const editUserState = atom({
  key: "editUserAtom",
  default: {
    id: "",
    name: "",
    age: "",
    email: "",
    todo: "",
  },
});
