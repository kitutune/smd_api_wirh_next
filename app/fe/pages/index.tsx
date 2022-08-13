import { ShowUserList } from "components/ShowUserList/ShowUserList";
import type { NextPage } from "next";
import { UserForm } from "../components/form";

const Home: NextPage = () => {
  return (
    <div>
      <UserForm />
      <ShowUserList />
    </div>
  );
};

export default Home;
