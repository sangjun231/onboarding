export interface UserState {
  userId: string | null;
  nickname: string | null;
  avatar: string | null;
  accessToken: string | null;
  login: (userData: {
    userId: string;
    nickname: string;
    avatar: string;
    accessToken: string;
  }) => void;
  logout: () => void;
}
