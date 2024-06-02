/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { configAtom } from "@/app/data/configStore";
import { ReportMetaProps } from "@/types/ReportMeta";
import { QuestionnaireProps } from "@/app/data/questionnaireStore";
import { Flex } from "antd";
import SectionTitle from "@/components/SectionTitle";
import SectionSubTitle from "@/components/SectionSubTitle";

const Page = ({ data, date, petid, qid }: ReportMetaProps) => {
  const componentRef = useRef(null);

  return (
    <div>
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
  );
};

export default Page;
