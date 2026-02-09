import Form from "../Form";
import type { UserDataType } from "../types";

const Register = () => {
  const handleRegister = (data: UserDataType) => {
    console.log(data);
  };
  return <Form type="register" onSubmit={handleRegister} />;
};

export default Register;
