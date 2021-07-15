interface IUser {
  gender: 0 | 1 | 2;
  isOnline: boolean;
  role: 0 | 1;
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IAuthState {
  user: IUser;
  token: string;
  isSubmitting: boolean;
}

export interface ILoginResponsePayload {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ILoginRequestPayload {
  email: string;
  password: string;
}
