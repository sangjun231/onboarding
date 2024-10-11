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
          <input
            className="border p-2 rounded-md"
            name="nickname"
            type="text"
            placeholder="닉네임"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="border mt-4 p-2 rounded-md" type="submit">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
