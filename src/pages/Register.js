import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const { user, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const toggleUser = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.email ||
      !values.password ||
      (!values.isMember && !values.name)
    ) {
      toast.error("Please fill all the fields!");
      return;
    }
    if (values.isMember) {
      dispatch(loginUser({ email: values.email, password: values.password }));
      return;
    }
    return dispatch(
      registerUser({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    );
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "register"}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="name"
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        {values.isMember ? (
          <button type="submit" className="btn btn-block">
            Login
          </button>
        ) : (
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            Register
          </button>
        )}
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleUser} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
