import "./App.css";
import Users from "./components/Users";

const usersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h2>Simple Crud Operation</h2>
      <Users usersPromise={usersPromise}></Users>
    </>
  );
}

export default App;
