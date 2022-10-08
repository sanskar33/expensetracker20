import React, { useState,useEffect } from "react";
import { Form, message } from "antd";
import Input from "antd/lib/input/Input"
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";
function Login() {
 const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "expensetracker-sanskar-user",
        JSON.stringify({ ...response.data, password: "" })
      );
      setLoading(false)
      message.success("Login successful");
      navigate("/");
    } catch (error) {
        setLoading(false)
      message.error("Login failed");
    }
  };
useEffect(() => {
if(localStorage.getItem("expensetracker-sanskar-user")){
navigate("/");
}
},[]);

  return (
    <div className="register">
        {loading && <Spinner/>}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Track Money & Expenses </h1>
        

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">
                Not Registered yet, Click Here To Register
              </Link>
              <button className="secondary" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
        <div className="col-md-5">
          <div className="lottie ">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
