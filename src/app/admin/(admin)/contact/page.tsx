"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, message } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";

const { Column } = Table;

interface ProductDataType {
  _id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
  createdAt: string;
  updated: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<ProductDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/contact/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        message.error("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const editItem = async (_id: string) => {
    router.push(`/admin/contact/${_id}`);
  };

  const deleteItem = async (_id: string) => {
    try {
      const response = await fetch(`/api/contact/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Item deleted successfully");
        setData(data.filter((item) => item._id !== _id));
      } else {
        message.error("Failed to delete item");
      }
    } catch (error) {
      message.error("An error occurred");
    }
  };

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("YYYY-MM-DD HH:mm:ss");
  };

  return (
    <Table dataSource={data} rowKey="_id" loading={loading}>
      <Column title="First Name" dataIndex="firstname" key="firstname" />
      <Column title="Last Name" dataIndex="lastname" key="lastname" />
      <Column title="Phone" dataIndex="phone" key="phone" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Requirement" dataIndex="requirement" key="requirement" />
      <Column title="Message" dataIndex="message" key="message" />
      <Column
        title="Updated"
        dataIndex="updated"
        key="updated"
        render={(text: string) => formatDate(text)}
      />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: ProductDataType) => (
          <Space size="middle">
            <a onClick={() => editItem(record._id)}>Edit</a>
            <a onClick={() => deleteItem(record._id)}>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default Page;
