export interface LoginForm {
  username: string;
  password: string;
  remember: boolean;
}

export interface LoginResponse {
  token: string;
  userId: string;
  username: string;
}

export interface RegisterForm extends LoginForm {
  confirmPassword: string;
  agreement: boolean;
}
