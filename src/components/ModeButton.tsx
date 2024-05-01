import { Button } from "antd";
import React from "react";

type Props = {
  mode: string;
  url: string;
};

const ButtonStyle: React.CSSProperties = {
  width: "200px",
  height: "140px",
  fontSize: "24px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "4px 4px 12px 4px rgba(34, 60, 80, 0.2)",
};

const ModeButton = ({ mode, url }: Props) => {
  return (
    <Button href={url} style={ButtonStyle}>
      {mode}
    </Button>
  );
};

export default ModeButton;
