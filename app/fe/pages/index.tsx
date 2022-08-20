import { ShowUserList } from "components/ShowUserList/ShowUserList";
import type { NextPage } from "next";
import { RecoilRoot } from "recoil";
import { UserForm } from "../components/form";

const Home: NextPage = () => {
  return (
    <div>
      <RecoilRoot>
        <UserForm />
        <ShowUserList />
      </RecoilRoot>
    </div>
  );
};

export default Home;
