import React from "react";
import Image from "next/image";
import { Flex } from "antd";
import CoverCard from "@/components/CoverCard";
import NavigationTab from "@/components/NavigationTab";
import CoverTitle from "@/components/CoverTitle";

const page = () => {
  return (
    <>
      <Flex vertical align="center">
        <div
          style={{ position: "relative", width: "1128px", height: "1634px" }}
        >
          <Image
            src="/images/cover.png"
            alt="cover"
            layout="fill"
            quality={100}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", top: "40px", right: "20px" }}>
            <CoverCard />
          </div>
          <div style={{ position: "absolute", top: "400px", right: "140px" }}>
            <CoverTitle />
          </div>
        </div>
      </Flex>
      <NavigationTab />
    </>
  );
};

export default page;
