import React from "react";

function LoginPage() {
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
            className="bg-white p-2 rounded-md"
            type="text"
            name="username"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="password">Password: </label>
          <input
            className="bg-white p-2 rounded-md"
            type="password"
            name="password"
            required
          />
        </div>
        <button className="hover:cursor-pointer hover:bg-gray-300 bg-amber-200 shadow-lg rounded-lg py-2 px-4 w-1/2">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
