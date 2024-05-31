/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import QuestionnaireTable from "@/components/QuestionnaireTable";
import SectionTitle from "@/components/SectionTitle";
import { Flex, FloatButton, message } from "antd";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FileTextOutlined } from "@ant-design/icons";
import { ReportMetaProps } from "@/app/data/reportMeta";
import {
  QuestionnaireProps,
  questionnaireAtom,
} from "@/app/data/questionnaireStore";
import { useAtom } from "jotai";

const page = ({ data, date }: ReportMetaProps) => {
  const componentRef = useRef(null);
  const [content, setContent] = useAtom(questionnaireAtom);

  const onSave = async (content: QuestionnaireProps, petID: string) => {
    try {
      const response = await fetch(
        `/api/health-check/questionnaire?petID=${petID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...content,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to post Questionnaire");
      }
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

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
            <SectionTitle
              title="강아지 건강검진 문진표"
              data={data}
              date={date}
            />
            <QuestionnaireTable data={data} />
          </div>
        </Flex>
      </div>
      <NavigationTab />
      <FloatButton
        shape="square"
        style={{
          width: "128px",
          bottom: "80px",
          right: "100px",
        }}
        type="primary"
        description={"저장하기"}
        onClick={() => onSave(content, data?.id || "")}
      />
      <ReactToPrint
        trigger={() => (
          <FloatButton
            icon={<FileTextOutlined />}
            description="PDF"
            shape="square"
            style={{ bottom: "80px", right: "40px" }}
          />
        )}
        content={() => componentRef.current}
        copyStyles={true}
        pageStyle="@page { size: 1300px 2200px; -webkit-print-color-adjust: exact; }"
      />
    </>
  );
};

export default page;
