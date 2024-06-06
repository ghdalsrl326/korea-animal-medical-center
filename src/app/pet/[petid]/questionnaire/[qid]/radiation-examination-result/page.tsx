/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import RadiationExamImageTable from "@/components/RadiationExamImageTable";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { ConfigProvider, Flex, FloatButton, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { isResGetRadiationExam, useData } from "@/app/contexts/DataContext";
import { useAtom } from "jotai";
import { radiationExamAtom } from "@/app/data/radiationExamStore";
import { configAtom } from "@/app/data/configStore";
import { saveRadiationExam } from "@/service/RadiationExamClient";
import dayjs from "dayjs";
import FloatButtonGroup from "@/components/FloatButtonGroup";
import { useParams } from "next/navigation";

const page = () => {
  const { data, date, content: fetchedContent, myInfo } = useData();

  const componentRef = useRef(null);
  const params = useParams();
  const { qid } = params;

  const [content, setContent] = useAtom(radiationExamAtom);
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
    if (fetchedContent && isResGetRadiationExam(fetchedContent)) {
      setContent((prev) => ({
        ...prev,
        radiographyImage1: fetchedContent?.result.radiographyImage1 ?? "",
        radiographyImage2: fetchedContent?.result.radiographyImage2 ?? "",
        radiographyImage3: fetchedContent?.result.radiographyImage3 ?? "",
        radiographyImage4: fetchedContent?.result.radiographyImage4 ?? "",
        radiographyImage5: fetchedContent?.result.radiographyImage5 ?? "",
        thoraxAbdomenRadiologyResult:
          fetchedContent?.result.thoraxAbdomenRadiologyResult ?? "",
        radiologyComment: fetchedContent?.result.radiologyComment ?? "",
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
        const result = await saveRadiationExam(
          {
            radiographyImage1: content.radiographyImage1,
            radiographyImage2: content.radiographyImage2,
            radiographyImage3: content.radiographyImage3,
            radiographyImage4: content.radiographyImage4,
            radiographyImage5: content.radiographyImage5,
            thoraxAbdomenRadiologyResult: content.thoraxAbdomenRadiologyResult,
            radiologyComment: content.radiologyComment,
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
              height: "2000px",
              position: "relative",
            }}
          >
            <SectionTitle title="건강검진결과" data={data} date={date} />
            <SectionSubTitle title="방사선검사결과" />
            <RadiationExamImageTable />
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
