"use client";

import { Row } from "antd";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        color: "red",
      }}
    >
      <h1>Not Found</h1>
    </Row>
  );
};

export default ErrorPage;
