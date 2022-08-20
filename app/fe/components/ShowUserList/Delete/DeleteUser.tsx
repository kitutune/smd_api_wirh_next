import axios from "axios";

export const useDeleteUser = () => {
  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/api/user/${id}`).then((res) => {
      console.log("res.data", res.data);
    });
  };

  return deleteUser;
};
