import Form from "../Form";
import type { UserDataType } from "../types";
import { register, setStatus } from "../../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);
  console.log(status);
  const dispatch = useAppDispatch();
  const handleRegister = async (data: UserDataType) => {
    console.log(data);
    dispatch(register(data));
  };
  useEffect(() => {
    if (status === "success") {
      dispatch(setStatus("loading")); //"success" status changed to "loading" in login-page
      navigate("/login");
    }
  }, [status, navigate, dispatch]); // status change bhayesi matra useEffect work garxa
  return <Form type="register" onSubmit={handleRegister} />;
};
export default Register;
