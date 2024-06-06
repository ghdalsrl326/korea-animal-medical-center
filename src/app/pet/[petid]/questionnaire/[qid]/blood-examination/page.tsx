"use client";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex } from "antd";
import React, { useRef } from "react";
import { useData } from "@/app/contexts/DataContext";
import FloatButtonGroup from "@/components/FloatButtonGroup";

const Page: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { data, date, myInfo } = useData();

  return (
    <>
      <div ref={componentRef}>
        <Flex vertical justify="start" align="center">
          <div
            style={{
              width: "1128px",
              height: "2000px",
              position: "relative",
            }}
          >
            <SectionTitle title="건강검진결과" data={data} date={date} />
            <SectionSubTitle title="고려메디컬센터의 혈액검사" />
          </div>
        </Flex>
      </div>
      <NavigationTab />
      <FloatButtonGroup componentRef={componentRef} admin={myInfo?.isAdmin} />
    </>
  );
};

export default Page;
