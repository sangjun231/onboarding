import React, { useState } from "react";
import { useLogin } from "../hooks/useUser";

const LoginPage = () => {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const loginMutation = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-x-4 flex justify-center items-center">
          <input
            className="border p-2 rounded-md"
            name="id"
            type="text"
            placeholder="아이디"
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded-md"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="border mt-4 p-2 rounded-md" type="submit">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
