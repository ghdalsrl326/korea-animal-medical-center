import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex } from "antd";
import React from "react";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import Signature from "@/components/Signature";

const ReactQuill = dynamic(() => import("../../components/QuillEditor"), {
  ssr: false,
});

const page = () => {
  return (
    <>
      <Flex vertical justify="start" align="center">
        <div
          style={{
            width: "1128px",
            height: "2000px",
            position: "relative",
          }}
        >
          <SectionTitle title="건강검진결과" />
          <SectionSubTitle title="종합검진소견" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "82%",
            height: "100%",
            top: "260px",
          }}
        >
          <Flex vertical justify="start" gap="large">
            <ReactQuill />
            <Signature />
          </Flex>
        </div>
      </Flex>
      <NavigationTab />
    </>
  );
};

export default page;
