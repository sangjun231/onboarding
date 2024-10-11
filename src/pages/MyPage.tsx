import React, { useState, useEffect } from "react";
import { useUserProfile } from "../hooks/useUser";
import { useUserStore } from "../stores/userStore";
import { updateUserProfile } from "../api/userApi";

const MyPage = () => {
  const { data: user, isLoading, error } = useUserProfile();
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const accessToken = useUserStore((state) => state.accessToken);

  useEffect(() => {
    if (user) {
      setNickname(user.nickname);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) return;

    const formData = new FormData();
    formData.append("nickname", nickname);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await updateUserProfile(accessToken, formData);
      alert(response.message);
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div>
      <div>
        <p className="font-bold flex justify-center">마이페이지</p>
      </div>
      {user && (
        <div className="flex flex-col items-center my-4 space-y-2">
          <img src={user.avatar || ""} alt="프로필 이미지" width="100" />
          <p>닉네임: {user.nickname}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center space-x-2">
          <input
            className="border p-2 rounded-md"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
          />
          <input
            className="border p-2 rounded-md"
            type="file"
            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
          />
        </div>
        <div className="flex justify-center">
          <button className="border mt-4 p-2 rounded-md" type="submit">
            프로필 업데이트
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyPage;
