"use client";
import React from "react";
import { Form, Input, Space, Upload, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";
import { CldUploadWidget } from "next-cloudinary";

const { Option } = Select;
const { TextArea } = Input;

interface SubmitButtonProps {
  form: any;
  fileUploaded: boolean;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  fileUploaded,
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
  }, [form, values, fileUploaded]);
  if (!fileUploaded) {
    return null;
  }
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const Page: React.FC = () => {
  const [form] = Form.useForm();
  const [subCategories, setSubCategories] = React.useState<string[]>([]);
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [fileUploaded, setFileUploaded] = React.useState<boolean>(false);

  const categoryOptions: Record<string, string[]> = {
    carpets: [
      "Wall-to-Wall-carpet",
      "Office-carpet",
      "Home-carpet",
      "Living-room-carpet",
      "Mosque-carpet",
      "Residential-carpet",
      "Hotel-carpet",
    ],
    curtains: [
      "Living-room-curtain",
      "Sheer-curtain",
      "Master-room-curtain",
      "Motorized-curtain",
      "Roman-blinds",
    ],
    rugs: [
      "Sisal-rugs",
      "Area-rugs",
      "Round-rugs",
      "Shaggy-rugs",
      "Custom-rugs",
    ],
    flooring: ["Vinyl-flooring", "Parquet-flooring", "LVT-flooring"],
    carpettiles: [
      "Interlocking-carpet-tiles",
      "Peel&Stick-carpet-tiles",
      "Commercial-carpet-tiles",
      "Residential-carpet-tiles",
      "Basement-carpet-tiles",
    ],
  };

  const onCategoryChange = (value: string) => {
    setSubCategories(categoryOptions[value] || []);
    form.setFieldsValue({ subcategory: undefined });
  };

  const onFinish = async (values: any) => {
    try {
      const blogData = {
        ...values,
        imageurl: imageUrl,
      };
      const response = await fetch("/api/blog/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        toast.success("blog added successfully!");
        console.log("blog added successfully!");
        form.resetFields(); // Reset the form fields after submission
        setImageUrl("");
      } else {
        toast.error("Failed to add blog.");
        console.error("Failed to add blog.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Form
      form={form}
      name="productForm"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish} // Add onFinish handler
    >
      <Form.Item valuePropName="fileList">
        <CldUploadWidget
          uploadPreset="fistchoicecarpet"
          onSuccess={({ event, info }) => {
            if (event === "success") {
              if (info && typeof info !== "string" && "secure_url" in info) {
                console.log(info.secure_url);
                setImageUrl(info.secure_url);
                form.setFieldsValue({ imageurl: info.secure_url });
              }
              setFileUploaded(true);
              toast.success("File uploaded");
            }
          }}
        >
          {({ open }) => <Button onClick={() => open()}>Upload Image</Button>}
        </CldUploadWidget>
        {fileUploaded && (
          <h1 className="text-[#14B1E7] font-light text-sm">File uploaded</h1>
        )}
      </Form.Item>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="slung" label="Slung" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select
          placeholder="Select a category"
          onChange={onCategoryChange}
          allowClear
        >
          <Option value="carpets">Carpets</Option>
          <Option value="curtains">Curtains</Option>
          <Option value="rugs">Rugs</Option>
          <Option value="flooring">Flooring</Option>
          <Option value="carpettiles">Carpet Tiles</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="subcategory"
        label="Subcategory"
        rules={[{ required: true }]}
      >
        <Select placeholder="Select a subcategory" allowClear>
          {subCategories.map((subCategory) => (
            <Option key={subCategory} value={subCategory}>
              {subCategory}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Space>
          <SubmitButton form={form} fileUploaded={fileUploaded}>
            Submit
          </SubmitButton>
          <Button
            htmlType="reset"
            onClick={() => {
              setImageUrl("");
              setFileUploaded(false);
            }}
          >
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Page;
