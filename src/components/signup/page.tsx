"use client";
import { useState } from "react";
import { Button, Input, Form } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Success:", values);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-lg font-bold text-black/70 mb-6">
          Login to Your Account
        </h1>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          {/* Email */}
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-[#14B1E7]" />}
              placeholder="Email"
              className="py-2"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-[#14B1E7]" />}
              placeholder="Password"
              className="py-2"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <button
              type="submit"
              className="w-full bg-[#FFC100] hover:bg-[#d8b341] border-none py-2 font-bold text-white"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <span className="text-black/90">I have a account? </span>
          <Link href="/login" className="text-blue-500 font-bold underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
