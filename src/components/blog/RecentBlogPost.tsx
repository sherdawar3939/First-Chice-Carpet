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

interface RecentBlogPostProps
  extends Omit<BlogPost, "category" | "subcategory"> {}

const RecentBlogPost: React.FC<RecentBlogPostProps> = ({
  _id,
  imageurl,
  title,
  description,
  updated,
}) => (
  <Link href={`/blogs/${_id}`}>
    <div className="shadow-lg transition-transform transform hover:scale-105 p-2 rounded-sm">
      <div className="flex gap-4">
        <img
          alt={title}
          src={imageurl}
          className="w-28 h-28 object-cover rounded-sm p-1"
        />
        <div className="flex flex-col justify-between">
          <Title level={4} className="mb-1 text-lg text-blue-600">
            {title}
          </Title>
          <Paragraph className="text-gray-600 text-sm line-clamp-2 mb-2">
            {description}
          </Paragraph>
          <Space className="text-xs text-gray-500">
            <CalendarOutlined />
            <span>{new Date(updated).toLocaleDateString()}</span>
          </Space>
        </div>
      </div>
    </div>
  </Link>
);

export default RecentBlogPost;
