import Title from "antd/es/typography/Title";
import React from "react";

type Props = {
  description: string;
  top: string;
};

const ContentDescription = ({ description, top }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "95%",
        height: "50px",
        top: top,
        padding: "40px",
      }}
    >
      <Title level={4}>{description}</Title>
    </div>
  );
};

export default ContentDescription;
