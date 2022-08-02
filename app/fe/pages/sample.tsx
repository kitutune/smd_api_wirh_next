import useSWR from "swr";

export const fetchdata = () => {
  const { data, error } = useSWR(
    "http://localhost:8080/account/getAccount",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div>
      <p>fetch</p>
      <h1>{data.name}</h1>
      {/* <p>{data.description}</p> */}
      <div>👁 {data.email}</div>
      <div>✨ {data.password}</div>
      {/* <div>🍴 {data.forks_count}</div> */}
    </div>
  );
};
