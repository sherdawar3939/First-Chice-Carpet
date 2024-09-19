"use client";
import React from "react";
import { Form, Input, Space, Button } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const { TextArea } = Input;

interface SubmitButtonProps {
  form: any;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [form] = Form.useForm();

  React.useEffect(() => {
    // Fetch product data to populate form when component mounts
    const fetchProductData = async () => {
      try {
        const response = await fetch(`/api/contact/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const result = await response.json();
        form.setFieldsValue(result);
      } catch (error) {
        toast.error("An error occurred while fetching blog data");
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(`http://localhost:3000/api/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("contact added successfully!");
        console.log("Data submitted successfully!");
        form.resetFields(); // Reset the form fields after submission
        router.push("/admin/contact");
      } else {
        toast.error("Failed to add contact.");
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Form
      form={form}
      name="contactForm"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish} // Add onFinish handler
    >
      <Form.Item
        name="firstname"
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="lastname" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, type: "string", min: 10 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="requirement" label="Requirement">
        <Input />
      </Form.Item>
      <Form.Item name="message" label="Message">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Space>
          <SubmitButton form={form}>Submit</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Page;
