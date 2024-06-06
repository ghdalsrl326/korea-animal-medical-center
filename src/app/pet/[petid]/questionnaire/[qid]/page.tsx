"use client";
import NavigationTab from "@/components/NavigationTab";
import QuestionnaireTable from "@/components/QuestionnaireTable";
import SectionTitle from "@/components/SectionTitle";
import { ConfigProvider, Flex, FloatButton, message } from "antd";
import React, { useRef, useEffect, useState } from "react";
import { questionnaireAtom } from "@/app/data/questionnaireStore";
import { useAtom } from "jotai";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";
import { URL } from "@/app/data/url";
import { configAtom } from "@/app/data/configStore";
import { saveQuestionnaire } from "@/service/questionnaireClient";
import { ResSaveReport } from "@/types/Report";
import { isResGetQuestionnaire, useData } from "@/app/contexts/DataContext";
import FloatButtonGroup from "@/components/FloatButtonGroup";

const Page = () => {
  const { data, date, content: fetchedContent, myInfo } = useData();

  const componentRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const [content, setContent] = useAtom(questionnaireAtom);
  const [config, setConfig] = useAtom(configAtom);

  const [originalContent, setOriginalContent] = useState(content);
  const [isModified, setIsModified] = useState(false);
  const [lastModified, setLastModified] = useState<string>("");

  useEffect(() => {
    if (fetchedContent && isResGetQuestionnaire(fetchedContent)) {
      setContent((prev) => ({
        ...prev,
        healthCheckCycle: fetchedContent?.result.healthCheckCycle ?? "",
        hasDiagnosedDiseases:
          fetchedContent?.result.hasDiagnosedDiseases ?? null,
        diagnosedDiseasesName:
          fetchedContent?.result.diagnosedDiseasesName ?? "",
        diagnosedDiseasesStartDay:
          fetchedContent?.result.diagnosedDiseasesStartDay ?? "",
        isTakingCareDiagnosedDiseases:
          fetchedContent?.result.isTakingCareDiagnosedDiseases ?? "",
        isMedicationTaken: fetchedContent?.result.isMedicationTaken ?? null,
        medicationTakenDetail:
          fetchedContent?.result.medicationTakenDetail ?? "",
        hasMedicalHistory: fetchedContent?.result.hasMedicalHistory ?? null,
        medicalHistoryDetail: fetchedContent?.result.medicalHistoryDetail ?? "",
        hasMedicationSideEffects:
          fetchedContent?.result.hasMedicationSideEffects ?? null,
        medicationSideEffectsDetail:
          fetchedContent?.result.medicationSideEffectsDetail ?? "",
        hasOtherPets: fetchedContent?.result.hasOtherPets ?? null,
        numberOfDogs: fetchedContent?.result.numberOfDogs ?? 0,
        numberOfCats: fetchedContent?.result.numberOfCats ?? 0,
        respiratorySymptoms: fetchedContent?.result.respiratorySymptoms ?? [],
        frequencyOfWalksPerWeek:
          fetchedContent?.result.frequencyOfWalksPerWeek ?? "",
        walkingHour: fetchedContent?.result.walkingHour ?? "",
        vaccinationInjection: fetchedContent?.result.vaccinationInjection ?? "",
        heartwormVaccinationInjection:
          fetchedContent?.result.heartwormVaccinationInjection ?? "",
        ExternalParasitesVaccinationInjection:
          fetchedContent?.result.ExternalParasitesVaccinationInjection ?? "",
        drinkingHabit: fetchedContent?.result.drinkingHabit ?? "",
        cupsPerDay: fetchedContent?.result.cupsPerDay ?? "",
        appetiteLevel: fetchedContent?.result.appetiteLevel ?? "",
        appetiteChange: fetchedContent?.result.appetiteChange ?? "",
        foodType: fetchedContent?.result.foodType ?? "",
        feedingType: fetchedContent?.result.feedingType ?? "",
        restrictedFeedingDetail:
          fetchedContent?.result.restrictedFeedingDetail ?? "",
        forcedFeedingDetail: fetchedContent?.result.forcedFeedingDetail ?? "",
        foodName: fetchedContent?.result.foodName ?? "",
        dailyAmount: fetchedContent?.result.dailyAmount ?? "",
        eatsSnacks: fetchedContent?.result.eatsSnacks ?? null,
        snackType: fetchedContent?.result.snackType ?? "",
        treatFrequency: fetchedContent?.result.treatFrequency ?? "",
        eatsSuppliements: fetchedContent?.result.eatsSuppliements ?? null,
        supplements: fetchedContent?.result.supplements ?? "",
        vomitingFrequency: fetchedContent?.result.vomitingFrequency ?? "",
        teethCleaningFrequency:
          fetchedContent?.result.teethCleaningFrequency ?? "",
        urineTexture: fetchedContent?.result.urineTexture ?? "",
        urinationFrequency: fetchedContent?.result.urinationFrequency ?? "",
        stoolTexture: fetchedContent?.result.stoolTexture ?? "",
        defecationFrequency: fetchedContent?.result.defecationFrequency ?? "",
        wantsBloodTypeTest: fetchedContent?.result.wantsBloodTypeTest ?? false,
        additionalExamRequests:
          fetchedContent?.result.additionalExamRequests ?? "",
      }));
    }
    setOriginalContent(content); // 초기 content를 originalContent로 설정
  }, []);

  useEffect(() => {
    const hasChanges =
      JSON.stringify(originalContent) !== JSON.stringify(content);
    setIsModified(hasChanges);
  }, [content, originalContent]);

  const handleSaveClick = async () => {
    if (isModified) {
      try {
        const result = await saveQuestionnaire(content, data?.id);

        if ("error" in result) {
          throw new Error(result.error);
        }

        const { questionnaireId, isFirstTime } = result as ResSaveReport;

        setOriginalContent(content); // 저장 성공 시 originalContent를 현재 content로 업데이트
        setIsModified(false); // 저장 성공 시 버튼 비활성화
        setLastModified(dayjs().format("YY.MM.DD HH:mm:ss")); // 마지막 수정 시점 업데이트
        setConfig((prev) => ({
          ...prev,
          qid: questionnaireId.toString(),
          isFirstTime,
        }));

        if (pathname === `${URL.PET}/${data?.id}${URL.QUESTIONNAIRE}`) {
          router.push(
            `${URL.PET}/${data?.id}${URL.QUESTIONNAIRE}/${questionnaireId}`
          );
        }
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
      )}
      <FloatButtonGroup componentRef={componentRef} admin={myInfo?.isAdmin} />
    </>
  );
};

export default Page;
