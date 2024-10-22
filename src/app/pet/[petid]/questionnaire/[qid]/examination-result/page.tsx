/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { ConfigProvider, Flex, FloatButton, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ExamResultContent from "@/components/ExamResultContent";
import { isResGetExamResult, useData } from "@/app/contexts/DataContext";
import { useAtom } from "jotai";
import { examResultAtom } from "@/app/data/examResultStore";
import { configAtom } from "@/app/data/configStore";
import { saveExamResult } from "@/service/examResultClient";
import dayjs from "dayjs";
import FloatButtonGroup from "@/components/FloatButtonGroup";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  const { data, date, content: fetchedContent, myInfo } = useData();

  const componentRef = useRef(null);
  const params = useParams();
  const router = useRouter();
  const { qid } = params;

  const [content, setContent] = useAtom(examResultAtom);
  const [config, setConfig] = useAtom(configAtom);

  const [originalContent, setOriginalContent] = useState(content);
  const [isModified, setIsModified] = useState(false);
  const [lastModified, setLastModified] = useState<string>("");

  useEffect(() => {
    setConfig((prev) => ({
      ...prev,
      qid: qid as string,
    }));
  }, [qid, setConfig]);

  useEffect(() => {
    if (fetchedContent && isResGetExamResult(fetchedContent)) {
      setContent((prev) => ({
        ...prev,
        generalComment: fetchedContent?.result.generalComment ?? "",
      }));
    }
    setOriginalContent(content);
  }, []);

  useEffect(() => {
    const hasChanged =
      JSON.stringify(originalContent) !== JSON.stringify(content);
    setIsModified(hasChanged);
  }, [content, originalContent]);

  const handleSaveClick = async () => {
    if (isModified) {
      try {
        const result = await saveExamResult(
          {
            generalComment: content.generalComment,
          },
          config.qid
        );

        if ("error" in result) {
          throw new Error(result.error);
        }

        setOriginalContent(content);
        setIsModified(false);
        setLastModified(dayjs().format("YY.MM.DD HH:mm:ss"));
        message.success("저장되었습니다.");
        router.refresh();
      } catch (error) {
        message.error("저장 중 오류가 발생했습니다.");
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
              height: "1200px",
              position: "relative",
            }}
          >
            <SectionTitle title="건강검진결과" data={data} date={date} />
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
            {myInfo && <ExamResultContent myInfo={myInfo} />}
          </div>
        </Flex>
      </div>
      <NavigationTab />
      {!myInfo?.isAdmin && (
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
              opacity: isModified ? 1 : 0.5,
              pointerEvents: isModified ? "auto" : "none",
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
      )}
      <FloatButtonGroup componentRef={componentRef} admin={myInfo?.isAdmin} />
    </>
  );
};

export default page;
