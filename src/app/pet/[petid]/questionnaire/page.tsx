/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import QuestionnaireTable from "@/components/QuestionnaireTable";
import SectionTitle from "@/components/SectionTitle";
import { ConfigProvider, Flex, FloatButton, message } from "antd";
import React, { useRef, useEffect, useState } from "react";
import ReactToPrint from "react-to-print";
import { FileTextOutlined } from "@ant-design/icons";
import { ReportMetaProps } from "@/app/data/reportMeta";
import {
  QuestionnaireProps,
  questionnaireAtom,
} from "@/app/data/questionnaireStore";
import { useAtom } from "jotai";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";
import { URL } from "@/app/data/url";
import { configAtom } from "@/app/data/configStore";

const Page = ({ data, date }: ReportMetaProps) => {
  const componentRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const [content, setContent] = useAtom(questionnaireAtom);
  const [originalContent, setOriginalContent] = useState(content);
  const [isModified, setIsModified] = useState(false);
  const [lastModified, setLastModified] = useState<string>("");
  const [config, setConfig] = useAtom(configAtom);

  useEffect(() => {
    setOriginalContent(content); // 초기 content를 originalContent로 설정
  }, []);

  useEffect(() => {
    const hasChanges =
      JSON.stringify(originalContent) !== JSON.stringify(content);
    setIsModified(hasChanges);
  }, [content, originalContent]);

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
      } else {
        setOriginalContent(content); // 저장 성공 시 originalContent를 현재 content로 업데이트
        setIsModified(false); // 저장 성공 시 버튼 비활성화
        setLastModified(dayjs().format("YY.MM.DD HH:mm:ss")); // 마지막 수정 시점 업데이트

        pathname === `${URL.PET}/${petID}${URL.QUESTIONNAIRE}` &&
          data?.questionnaire?.length &&
          router.push(
            `${URL.PET}/${petID}/${URL.QUESTIONNAIRE}/${data?.questionnaire[0]?.id}`
          );
      }
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const handleSaveClick = () => {
    if (isModified) {
      onSave(content, data?.id || "");
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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F19EA6",
          },
        }}
      >
        <FloatButton
          shape="square"
          style={{
            width: "180px",
            bottom: "80px",
            right: "100px",
            opacity: isModified ? 1 : 0.5, // 수정 여부에 따라 투명도 변경
            pointerEvents: isModified ? "auto" : "none", // 수정 여부에 따라 클릭 이벤트 처리
          }}
          type="primary"
          description={
            <>
              저장하기 <br />
              {lastModified ? `Last Mod. ${lastModified}` : ""}
            </>
          }
          onClick={handleSaveClick}
        />
      </ConfigProvider>
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

export default Page;
