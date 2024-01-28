import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex } from "antd";
import React from "react";
import "react-quill/dist/quill.snow.css";
import ExamResultContent from "@/components/ExamResultContent";

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
            width: "1128px",
            height: "100%",
            top: "260px",
          }}
        >
          <ExamResultContent />
        </div>
      </Flex>
      <NavigationTab />
    </>
  );
};

export default page;
