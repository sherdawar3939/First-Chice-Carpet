"use client";

import React from "react";
import { Typography, Tag, Spin, Alert, Divider } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  EditOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { useParams } from "next/navigation";

const { Title, Paragraph } = Typography;

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imageurl: string;
  category: string;
  subcategory: string;
  createdAt: string;
  updated: string;
  tags: string[];
}

const SingleBlogPage: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BlogPost = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to fetch the blog post. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert
          message="Not Found"
          description="The requested blog post could not be found."
          type="warning"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <article className="w-full mx-auto overflow-hidden">
        <div className="relative h-96">
          <Image
            src={post.imageurl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-8">
          <Title level={1} className="mb-4 text-3xl font-bold text-black/70">
            {post.title}
          </Title>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag icon={<FolderOutlined />} color="blue">
              {post.category}
            </Tag>
            <Tag color="green">{post.subcategory}</Tag>
            {post.tags?.map((tag) => (
              <Tag key={tag} className="bg-gray-100 text-gray-600">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="flex items-center text-gray-500 mb-6">
            <CalendarOutlined className="mr-2" />
            <span className="mr-4">
              Published: {new Date(post.createdAt).toLocaleDateString()}
            </span>
            {post.updated && (
              <>
                <EditOutlined className="mr-2" />
                <span>
                  Updated: {new Date(post.updated).toLocaleDateString()}
                </span>
              </>
            )}
          </div>
          <Divider className="my-6" />
          <h1 className="text-sm font-normal leading-relaxed mb-8 text-black/70">
            {post.description}
          </h1>
        </div>
      </article>
    </div>
  );
};

export default SingleBlogPage;
