// MainBlogPost.tsx
import React from "react";
import { Card, Typography, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";

export interface BlogPost {
  _id: any;
  title: string;
  slung: string;
  description: string;
  imageurl: string;
  category: string;
  subcategory: string;
  updated: string;
}

const { Title, Paragraph } = Typography;

interface MainBlogPostProps
  extends Omit<BlogPost, "category" | "subcategory"> {}

const MainBlogPost: React.FC<MainBlogPostProps> = ({
  _id,
  imageurl,
  title,
  description,
  updated,
}) => (
  <>
    <Link href={`/blogs/${_id}`}>
      <div className="mb-6 shadow-lg rounded-sm py-5 px-3">
        <img
          alt={title}
          src={imageurl}
          className="w-full h-64 object-cover rounded-md transition-transform duration-300 hover:scale-95"
        />
        <Title level={3}>{title}</Title>
        <Paragraph className="text-gray-600">{description}</Paragraph>
        <Space>
          <CalendarOutlined />
          <span className="text-gray-500">
            {new Date(updated).toLocaleDateString()}
          </span>
        </Space>
      </div>
    </Link>
  </>
);

export default MainBlogPost;
