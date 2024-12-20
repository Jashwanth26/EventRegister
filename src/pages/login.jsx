import React, { useState, useEffect } from "react";
import "./auth.css";
import { Form, Input, Checkbox, Divider, Alert } from "antd";
import {
  GoogleSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context, SearchContext } from "../context/OrderContext";
import ShadowButton from "../components/shadowButton";
import { useContext } from "react";
import data from "../components/data";
export default function Login() {
  const navigate = useNavigate();
  //const { loginOAuth, login, isAuthenticated } = useAuth();

  const [OAuthError, setOAuthError] = useState(false);
  const [authError, setAuthError] = useState(false);
  const { setAuthenticated, isAuthenticated, login } = useContext(Context);

  const [form] = Form.useForm();
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const onLogin = async () => {
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");
    console.log("onlogin triggered");
    console.log(email, password);
    const check = data[0].users.filter(
      (item) => item.email == email && item.password == password
    );
    console.log(check, "check");
    if (check.length !== 0) {
      setAuthenticated(true);
      navigateToDashboard();
    } else setAuthError(true);
  };

  const Login = async () => {
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");

    const check = await login(email, password);
    console.log(isAuthenticated, "authentication");
    if (isAuthenticated) navigateToDashboard();
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center login"
        style={{ height: "100vh" }}
      >
        {authError && (
          <Alert
            message="Invalid Username or Password!"
            description="Please enter valid credentials!"
            type="error"
            showIcon
          />
        )}
        <div className="flex flex-col justify-center items-center mt-4 md:w-1/2 w-full">
          <span className="text-lato md:text-3xl text-xl">
            Welcome Back,
            <span className="text-lato" style={{ color: "#FF40A5" }}>
              Innovator
            </span>
          </span>
          <span className="text-lato mt-2 md:text-sm text-xs">
            Log In to Register for Events
            Email: user1@example.com
            Password: password1
          </span>
          <div className="flex flex-col w-full md:w-3/6 mt-8">
            <Form
              form={form}
              layout="vertical"
              labelCol={{
                xs: {
                  span: 24,
                },
                sm: {
                  span: 6,
                },
              }}
              wrapperCol={{
                xs: {
                  span: 24,
                },
                sm: {
                  span: 24,
                },
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email!",
                  },
                ]}
                className="text-lato"
              >
                <Input
                  type="email"
                  style={{ borderColor: "black" }}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password!",
                  },
                ]}
                className="text-lato"
              >
                <Input.Password
                  style={{ borderColor: "black" }}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item name="remember">
                <div className="flex flex-row justify-between">
                  <Checkbox>Remember me</Checkbox>
                  <a href="/forgot">Forgot Password?</a>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="flex justify-center">
                  <ShadowButton onclick={onLogin} />
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
