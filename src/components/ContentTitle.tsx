import Title from "antd/es/typography/Title";
import React from "react";

type Props = {
  title: string;
  top: string;
};

const ContentTitle = ({ title, top }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "50px",
        top: top,
        padding: "40px",
      }}
    >
      <Title level={3} style={{ color: "#d54c64" }}>
        - {title}
      </Title>
    </div>
  );
};

export default ContentTitle;
