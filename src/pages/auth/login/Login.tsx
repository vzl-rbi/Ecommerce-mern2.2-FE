import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Form from "../Form";
import type { UserLoginType } from "../types";
import { useEffect } from "react";
import { login, setStatus } from "../../../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.auth);
  // console.log(status);
  const dispatch = useAppDispatch();
  const handleLogin = async (data: UserLoginType) => {
    console.log(data);
    dispatch(login(data));
  };
  useEffect(() => {
    if (status === "success") {
      dispatch(setStatus("loading"));
      navigate("/");
    }
  }, [status, navigate, dispatch]);
  return <Form type="login" onSubmit={handleLogin} />;
};

export default Login;
