export interface State {
  username: string;
  password: string;
  authenticated: boolean;
  token: string;
  expireAt: number | null;
}
