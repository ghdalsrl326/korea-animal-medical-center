"use client";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { configAtom } from "@/app/data/configStore";
import getToday from "@/util/getToday";

type Props = {
  modename: string;
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

const ModeButton = ({ modename, url }: Props) => {
  const router = useRouter();
  const [configStore, setConfigStore] = useAtom(configAtom);

  const handleClick = () => {
    modename === "신규"
      ? setConfigStore((prev) => ({
          ...prev,
          mode: modename,
          petId: "new",
          date: getToday(),
        }))
      : setConfigStore((prev) => ({ ...prev, mode: modename }));
    router.push(url);
  };

  return (
    <Button style={ButtonStyle} onClick={handleClick}>
      {modename}
    </Button>
  );
};

export default ModeButton;
