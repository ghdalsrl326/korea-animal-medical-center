/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import HealthExamDetailTable from "@/components/HealthExamDetailTable";
import HealthExamSummaryTable from "@/components/HealthExamSummaryTable";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { ConfigProvider, Flex, FloatButton, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { isResGetHealthExam, useData } from "@/app/contexts/DataContext";
import { useAtom } from "jotai";
import { healthExamSummaryAtom } from "@/app/data/healthExamSummaryStore";
import { saveHealthExam } from "@/service/healthExamClient";
import dayjs from "dayjs";
import { healthExamDetailAtom } from "@/app/data/healthExamDetailStore";
import { configAtom } from "@/app/data/configStore";
import FloatButtonGroup from "@/components/FloatButtonGroup";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const { data, date, content: fetchedContent, myInfo } = useData();

  const componentRef = useRef(null);
  const params = useParams();
  const router = useRouter();
  const { qid } = params;

  const [summaryContent, setSummaryContent] = useAtom(healthExamSummaryAtom);
  const [detailContent, setDetailContent] = useAtom(healthExamDetailAtom);
  const [config, setConfig] = useAtom(configAtom);

  const [summaryOriginalContent, setSummaryOriginalContent] =
    useState(summaryContent);
  const [detailOriginalContent, setDetailOriginalContent] =
    useState(detailContent);
  const [isModified, setIsModified] = useState(false);
  const [lastModified, setLastModified] = useState<string>("");

  useEffect(() => {
    setConfig((prev) => ({
      ...prev,
      qid: qid as string,
    }));
  }, [qid, setConfig]);

  useEffect(() => {
    if (fetchedContent && isResGetHealthExam(fetchedContent)) {
      setSummaryContent((prev) => ({
        ...prev,
        vitalSigns: fetchedContent?.result.vitalSigns ?? "",
        superficialLymphNodes:
          fetchedContent?.result.superficialLymphNodes ?? "",
        auscultationHeartLung:
          fetchedContent?.result.auscultationHeartLung ?? "",
        nasalPharyngealCervical:
          fetchedContent?.result.nasalPharyngealCervical ?? "",
        bcsNMCS: fetchedContent?.result.bcsNMCS ?? "",
        musculoskeletalSystem:
          fetchedContent?.result.musculoskeletalSystem ?? "",
        reproductiveSystem: fetchedContent?.result.reproductiveSystem ?? "",
        neutered: fetchedContent?.result.neutered ?? "",
      }));

      setDetailContent((prev) => ({
        ...prev,
        skin: fetchedContent?.result.skin ?? "",
        coat: fetchedContent?.result.coat ?? "",
        leftEar: fetchedContent?.result.leftEar ?? "",
        rightEar: fetchedContent?.result.rightEar ?? "",
        skinPicture1: fetchedContent?.result.skinPicture1 ?? null,
        skinPicture2: fetchedContent?.result.skinPicture2 ?? null,
        skinPicture3: fetchedContent?.result.skinPicture3 ?? null,
        rightFluoresceinStaining:
          fetchedContent?.result.rightFluoresceinStaining ?? "",
        rightFluoresceinStainingLevel:
          fetchedContent?.result.rightFluoresceinStainingLevel ?? "",
        leftFluoresceinStaining:
          fetchedContent?.result.leftFluoresceinStaining ?? "",
        leftFluoresceinStainingLevel:
          fetchedContent?.result.leftFluoresceinStainingLevel ?? "",
        rightTearProduction: fetchedContent?.result.rightTearProduction ?? "",
        rightTearProductionLevel:
          fetchedContent?.result.rightTearProductionLevel ?? "",
        leftTearProduction: fetchedContent?.result.leftTearProduction ?? "",
        leftTearProductionLevel:
          fetchedContent?.result.leftTearProductionLevel ?? "",
        rightIntraocularPressure:
          fetchedContent?.result.rightIntraocularPressure ?? "",
        rightIntraocularPressureLevel:
          fetchedContent?.result.rightIntraocularPressureLevel ?? "",
        leftIntraocularPressure:
          fetchedContent?.result.leftIntraocularPressure ?? "",
        leftIntraocularPressureLevel:
          fetchedContent?.result.leftIntraocularPressureLevel ?? "",
        slirInpection: fetchedContent?.result.slirInpection ?? "",
        slirInpectionLevel: fetchedContent?.result.slirInpectionLevel ?? "",
        externalAppearance: fetchedContent?.result.externalAppearance ?? "",
        externalAppearanceLevel:
          fetchedContent?.result.externalAppearanceLevel ?? "",
        eyesPicture1: fetchedContent?.result.eyesPicture1 ?? null,
        eyesPicture2: fetchedContent?.result.eyesPicture2 ?? null,
        eyesPicture3: fetchedContent?.result.eyesPicture3 ?? null,
        malocclusion: fetchedContent?.result.malocclusion ?? "",
        missingTeeth: fetchedContent?.result.missingTeeth ?? "",
        brokenTeeth: fetchedContent?.result.brokenTeeth ?? "",
        retainedDeciduousTeeth:
          fetchedContent?.result.retainedDeciduousTeeth ?? "",
        tartarPeriodontalDisease:
          fetchedContent?.result.tartarPeriodontalDisease ?? "",
        teethPicture1: fetchedContent?.result.teethPicture1 ?? null,
        teethPicture2: fetchedContent?.result.teethPicture2 ?? null,
        teethPicture3: fetchedContent?.result.teethPicture3 ?? null,
      }));
    }
    setSummaryOriginalContent(summaryContent);
    setDetailOriginalContent(detailContent);
  }, []);

  useEffect(() => {
    const hasChanges =
      JSON.stringify(summaryOriginalContent) !==
        JSON.stringify(summaryContent) ||
      JSON.stringify(detailOriginalContent) !== JSON.stringify(detailContent);
    setIsModified(hasChanges);
  }, [
    summaryContent,
    detailContent,
    summaryOriginalContent,
    detailOriginalContent,
  ]);

  const handleSaveClick = async () => {
    if (isModified) {
      try {
        const result = await saveHealthExam(
          {
            ...summaryContent,
            ...detailContent,
          },
          config.qid
        );

        if ("error" in result) {
          throw new Error(result.error);
        }

        setSummaryOriginalContent(summaryContent);
        setDetailOriginalContent(detailContent);
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
              height: "2000px",
              position: "relative",
            }}
          >
            <SectionTitle title="건강검진결과" data={data} date={date} />
            <SectionSubTitle title="신체검사 결과" />
            <HealthExamSummaryTable />
            <HealthExamDetailTable />
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
