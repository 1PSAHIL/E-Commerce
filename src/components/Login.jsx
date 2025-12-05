import React from "react";

export default function Login({ setLoggedIn }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <button
          onClick={() => {
            localStorage.setItem("loggedIn", "true");
            setLoggedIn(true);
          }}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
