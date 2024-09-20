"use client";

import { useState } from "react";
import { Button, Input, Form, Alert, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
}

const Page = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        message.success("Login is successful");
        router.push("/admin/product");
      }
    } catch (error) {
      message.error("Try again later");
      console.error("Login error:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-lg font-bold text-black/70 mb-6">
          Login to Your Admin Dashboard
        </h1>

        {error && (
          <Alert message={error} type="error" showIcon className="mb-4" />
        )}

        <Form<FormValues>
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-[#FFC100] hover:bg-[#d8b341] border-none py-2 font-bold text-white"
              loading={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </Form.Item>
        </Form>

        {/* <div className="text-center mt-4">
          <span className="text-black/90">Don't have an account? </span>
          <Link href="/signup" className="text-blue-500 font-bold underline">
            Sign Up
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
