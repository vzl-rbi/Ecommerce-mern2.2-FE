export interface UserDataType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}
export interface Props {
  type: string;
  onSubmit: (data:UserDataType) => void;
}
