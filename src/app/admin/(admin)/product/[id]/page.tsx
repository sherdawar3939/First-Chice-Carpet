"use client";
import React from "react";
import { Form, Input, Space, Upload, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";

const { Option } = Select;
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
  };

  React.useEffect(() => {
    // Fetch product data to populate form when component mounts
    const fetchProductData = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const result = await response.json();
        form.setFieldsValue(result);
        setSubCategories(categoryOptions[result.category] || []);
        setImageUrl(result.imageurl);
        setFileUploaded(true);
      } catch (error) {
        toast.error("An error occurred while fetching product data");
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  const onCategoryChange = (value: string) => {
    setSubCategories(categoryOptions[value] || []);
    form.setFieldsValue({ subcategory: undefined });
  };

  const onFinish = async (values: any) => {
    try {
      const productData = {
        ...values,
        imageurl: imageUrl,
      };
      const response = await fetch(`/api/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        toast.success("Product updated successfully!");
        form.resetFields(); // Reset the form fields after submission
        router.push("/admin/product");
      } else {
        toast.error("Failed to update product.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the product.");
    }
  };

  return (
    <>
      <Form
        form={form}
        name="productForm"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item valuePropName="fileList">
          <Space direction="vertical" size="small">
            <CldUploadWidget
              uploadPreset="fistchoicecarpet"
              onSuccess={({ info }) => {
                if (info && typeof info !== "string" && "secure_url" in info) {
                  console.log(info.secure_url);
                  setImageUrl(info.secure_url);
                  form.setFieldsValue({ imageurl: info.secure_url });
                  setFileUploaded(true);
                }
              }}
            >
              {({ open }) => (
                <Button onClick={() => open()}>
                  {fileUploaded ? "Change Image" : "Upload Image"}
                </Button>
              )}
            </CldUploadWidget>
            {fileUploaded && (
              <h1 className="text-sm font-light text-[#14B1E7]">
                Uploaded file
              </h1>
            )}
            {imageUrl && (
              <img src={imageUrl} alt="Product" style={{ maxWidth: "100px" }} />
            )}
          </Space>
        </Form.Item>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select a category"
            onChange={onCategoryChange}
            allowClear
          >
            <Option value="carpets">Carpets</Option>
            <Option value="curtains">Curtains</Option>
            <Option value="rugs">Rugs</Option>
            <Option value="flooring">Flooring</Option>
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
            <SubmitButton form={form}>Submit</SubmitButton>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
      <Toaster />
    </>
  );
};

export default Page;
