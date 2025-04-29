import React, { useState } from "react";
import { createUser } from "../services/api";

const Login = ({
  onLoginSuccess,
}: {
  onLoginSuccess: (rollNumber: string) => void;
}) => {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!rollNumber || !name) {
      setError("Both roll number and name are required!");
      return;
    }

    try {
      await createUser(rollNumber, name);
      onLoginSuccess(rollNumber);
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
