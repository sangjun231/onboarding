import { create } from "zustand";
import { UserState } from "../types/userType";

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  nickname: null,
  avatar: null,
  accessToken: null,

  login: (userData) => set(userData),

  logout: () =>
    set({ userId: null, nickname: null, avatar: null, accessToken: null }),
}));
