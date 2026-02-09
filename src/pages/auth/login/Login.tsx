import Form from "../Form";
import type { UserDataType } from "../types";

const Login = () => {
  const handleLogin = (data: UserDataType) => {
    console.log(data);
  };
  return <Form type="login" onSubmit={handleLogin} />;
};

export default Login;
