import NavigationTab from "@/components/NavigationTab";
import QuestionnaireTable from "@/components/QuestionnaireTable";
import SectionTitle from "@/components/SectionTitle";
import { Flex } from "antd";
import React from "react";

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
          <SectionTitle title="강아지 건강검진 문진표" />
          <QuestionnaireTable />
        </div>
      </Flex>
      <NavigationTab />
    </>
  );
};

export default page;
