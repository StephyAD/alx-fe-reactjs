import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Controlled Form Submitted:", { username, email, password });
    alert("Controlled registration successful!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-gray-700 text-center">
        Controlled Form
      </h2>

      {errors && <p className="text-red-500 text-sm">{errors}</p>}

      {/* Username */}
      <div>
        <label htmlFor="username" className="block mb-1 font-medium text-sm">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1 font-medium text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <button
        type="submit"
        className="mt-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;