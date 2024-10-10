import { useMutation, useQuery } from "@tanstack/react-query";
import { loginUser, registerUser, fetchUserProfile } from "../api/userApi";
import { useUserStore } from "../stores/userStore";

export const useLogin = () => {
  const login = useUserStore((state) => state.login);

  return useMutation({
    mutationFn: ({ id, password }: { id: string; password: string }) =>
      loginUser(id, password),
    onSuccess: (data) => {
      login({
        userId: data.userId,
        nickname: data.nickname,
        avatar: data.avatar,
        accessToken: data.accessToken,
      });
    },
  });
};

export const useRegister = () => {
  return useMutation<
    { message: string; success: boolean },
    Error,
    { id: string; password: string; nickname: string }
  >({
    mutationFn: ({ id, password, nickname }) =>
      registerUser(id, password, nickname),
  });
};

export const useUserProfile = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => fetchUserProfile(accessToken!),
    enabled: !!accessToken,
  });
};
