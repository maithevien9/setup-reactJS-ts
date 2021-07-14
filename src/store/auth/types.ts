interface User {
  gender: 0 | 1 | 2;
  isOnline: boolean;
  role: 0 | 1;
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface AuthState {
  user: User;
  token: string;
  isSubmitting: boolean;
}
