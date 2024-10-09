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
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        type="text"
        placeholder="아이디"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={handleChange}
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginPage;
