import HealthExamDetailTable from "@/components/HealthExamDetailTable";
import HealthExamSummaryTable from "@/components/HealthExamSummaryTable";
import NavigationTab from "@/components/NavigationTab";
import QuestionnaireTable from "@/components/QuestionnaireTable";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex, Input } from "antd";
import Title from "antd/es/typography/Title";
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
          <SectionTitle title="건강검진결과" />
          <SectionSubTitle title="신체검사 결과" />
          <HealthExamSummaryTable />
          <HealthExamDetailTable />
        </div>
      </Flex>
      <NavigationTab />
    </>
  );
};

export default page;
