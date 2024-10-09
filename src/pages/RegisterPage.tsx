import React, { useState } from "react";
import { useRegister } from "../hooks/useUser";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const registerMutation = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(formData);
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
      <input
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={handleChange}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default RegisterPage;
