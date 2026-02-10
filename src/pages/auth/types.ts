export interface UserDataType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}
export interface UserLoginType {
  email: string;
  password:string
}
export interface Props {
  type: string;
  onSubmit: (data:UserDataType) => void;
}
