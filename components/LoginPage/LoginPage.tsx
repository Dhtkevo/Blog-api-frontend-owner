import React, { useState } from "react";

interface CustomResponse extends Response {
  user?: {
    message: string;
    accessToken: string;
    user: { id: number; username: string; password: string; isAdmin: boolean };
  };
  accessToken?: string;
}

interface LoginPageProps {
  login: Function;
}

function LoginPage({ login }: LoginPageProps) {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let response: CustomResponse = await fetch(
      "http://localhost:3000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameField,
          password: passwordField,
        }),
      }
    );

    response = await response.json();

    if (response.user) {
      login(response.accessToken);
    }
  };

  return (
    <div className="bg-amber-100 h-screen flex justify-center items-center">
      <form
        method=""
        action=""
        className="bg-gray-100 shadow-lg rounded-2xl border border-amber-200 flex flex-col gap-8 items-center justify-center w-1/2 h-1/2"
      >
        <h1 className="font-bold text-4xl">Sign In</h1>
        <div className="flex items-center gap-2">
          <label htmlFor="username">Username: </label>
          <input
            className="bg-white p-2 rounded-md border border-black"
            type="text"
            name="username"
            value={usernameField}
            onChange={(e) => setUsernameField(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="password">Password: </label>
          <input
            className="bg-white p-2 rounded-md border border-black"
            type="password"
            name="password"
            value={passwordField}
            onChange={(e) => setPasswordField(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleLogin}
          className="hover:cursor-pointer hover:bg-gray-300 bg-amber-200 shadow-lg rounded-lg py-2 px-4 w-1/2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
