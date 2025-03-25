import "./App.css";
import { useState } from "react";
import LoginPage from "../components/LoginPage/LoginPage";
import PostContainer from "../components/PostsContainer/PostsContainer";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      {token ? <PostContainer token={token} /> : <LoginPage login={setToken} />}
    </>
  );
}

export default App;
