"use client";
import React, { useEffect, useState } from "react";
import MainBlogPost from "@/components/blog/MainBlogPost";
import RecentBlogPost from "@/components/blog/RecentBlogPost";
import { Typography, Spin } from "antd";

const { Title } = Typography;

export interface BlogPost {
  _id: string;
  title: string;
  slung: string;
  description: string;
  imageurl: string;
  category: string;
  subcategory: string;
  createdAt: string;
  updated: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/blog/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BlogPost[] = await response.json();
        if (data.length > 0) {
          setPosts(data);
          setRecentPosts(data.slice(-3).reverse());
        } else {
          setError("No blog posts found");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to fetch blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Blog Posts - Show all blogs */}
        <div className="md:w-2/3 space-y-8">
          {posts.map((post) => (
            <MainBlogPost key={post._id} {...post} />
          ))}
        </div>

        {/* Recent Blog Posts - Show only last 3 blogs */}
        <div className="md:w-1/3">
          <div className="sticky top-4">
            <Title level={3} className="mb-4">
              Recent Posts
            </Title>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <RecentBlogPost key={post._id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
