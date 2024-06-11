/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import BloodExamTable from "@/components/BloodExamTable";
import ContentDescription from "@/components/ContentDescription";
import ContentTitle from "@/components/ContentTitle";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { ConfigProvider, Flex, FloatButton, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { isResGetBloodExam, useData } from "@/app/contexts/DataContext";
import { useAtom } from "jotai";
import { bloodExamResultAtom } from "@/app/data/bloodExamResultStore";
import { configAtom } from "@/app/data/configStore";
import dayjs from "dayjs";
import { fetchLastBloodExam, saveBloodExam } from "@/service/bloodExamClient";
import FloatButtonGroup from "@/components/FloatButtonGroup";
import { useParams, useRouter } from "next/navigation";
import { getDateByQid } from "@/util/getDateByQid";

const page = () => {
  const { data, date, content: fetchedContent, myInfo } = useData();
  const params = useParams();
  const router = useRouter();
  const { qid } = params;

  const componentRef = useRef(null);

  const [content, setContent] = useAtom(bloodExamResultAtom);
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
    setContent(bloodExamResultAtom.init);
    if (fetchedContent && isResGetBloodExam(fetchedContent)) {
      setContent((prev) => ({
        ...prev,
        firstDate: date,
        pHFirst: fetchedContent?.result.vbgaResult.pH?.toString() ?? "",
        pCO2First: fetchedContent?.result.vbgaResult.pCO2?.toString() ?? "",
        pO2First: fetchedContent?.result.vbgaResult.pO2?.toString() ?? "",
        sodiumFirst: fetchedContent?.result.vbgaResult.sodium?.toString() ?? "",
        potassiumFirst:
          fetchedContent?.result.vbgaResult.potassium?.toString() ?? "",
        chlorideFirst:
          fetchedContent?.result.vbgaResult.chloride?.toString() ?? "",
        iCaFirst: fetchedContent?.result.vbgaResult.iCa?.toString() ?? "",
        hctFirst: fetchedContent?.result.vbgaResult.hct?.toString() ?? "",
        glucoseFirst:
          fetchedContent?.result.vbgaResult.glucose?.toString() ?? "",
        lactateFirst:
          fetchedContent?.result.vbgaResult.lactate?.toString() ?? "",
        anionGapFirst:
          fetchedContent?.result.vbgaResult.anionGap?.toString() ?? "",
        bicarbonateFirst:
          fetchedContent?.result.vbgaResult.bicarbonate?.toString() ?? "",
      }));
    }
    setOriginalContent(content);

    if (data.questionnaire && data.questionnaire.length > 1) {
      const currentQidIdx = data.questionnaire.findIndex(
        (item) => item.id.toString() === qid
      );
      const lastqid = data.questionnaire[currentQidIdx + 1]?.id;

      if (!lastqid) {
        return;
      }
      fetchLastBloodExam(lastqid).then((lastFetchedContent) => {
        setContent((prev) => ({
          ...prev,
          secondDate: getDateByQid(lastqid, data.questionnaire ?? []),
          pHSecond: lastFetchedContent?.result?.vbgaResult.pH?.toString() ?? "",
          pCO2Second:
            lastFetchedContent?.result?.vbgaResult.pCO2?.toString() ?? "",
          pO2Second:
            lastFetchedContent?.result?.vbgaResult.pO2?.toString() ?? "",
          sodiumSecond:
            lastFetchedContent?.result?.vbgaResult.sodium?.toString() ?? "",
          potassiumSecond:
            lastFetchedContent?.result?.vbgaResult.potassium?.toString() ?? "",
          chlorideSecond:
            lastFetchedContent?.result?.vbgaResult.chloride?.toString() ?? "",
          iCaSecond:
            lastFetchedContent?.result?.vbgaResult.iCa?.toString() ?? "",
          hctSecond:
            lastFetchedContent?.result?.vbgaResult.hct?.toString() ?? "",
          glucoseSecond:
            lastFetchedContent?.result?.vbgaResult.glucose?.toString() ?? "",
          lactateSecond:
            lastFetchedContent?.result?.vbgaResult.lactate?.toString() ?? "",
          anionGapSecond:
            lastFetchedContent?.result?.vbgaResult.anionGap?.toString() ?? "",
          bicarbonateSecond:
            lastFetchedContent?.result?.vbgaResult.bicarbonate?.toString() ??
            "",
        }));
      });
    }
  }, [config.date]);

  useEffect(() => {
    const hasChanges =
      JSON.stringify(originalContent) !== JSON.stringify(content);
    setIsModified(hasChanges);
  }, [content, originalContent]);

  const handleSaveClick = async () => {
    if (isModified) {
      try {
        const result = await saveBloodExam(
          {
            vbgaResult: {
              pH: parseFloat(content.pHFirst),
              pCO2: parseFloat(content.pCO2First),
              pO2: parseFloat(content.pO2First),
              sodium: parseFloat(content.sodiumFirst),
              potassium: parseFloat(content.potassiumFirst),
              chloride: parseFloat(content.chlorideFirst),
              iCa: parseFloat(content.iCaFirst),
              hct: parseFloat(content.hctFirst),
              glucose: parseFloat(content.glucoseFirst),
              lactate: parseFloat(content.lactateFirst),
              anionGap: parseFloat(content.anionGapFirst),
              bicarbonate: parseFloat(content.bicarbonateFirst),
            },
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
            <SectionSubTitle title="혈액검사 결과" />
            <ContentTitle
              title="정맥혈 가스검사 (VBGA) / 전해질 검사"
              top="220px"
            />
            <ContentDescription
              description="정맥혈의 경우, 산소가 부족하고 이산화탄소가 풍부한 편입니다. 정맥혈 가스 검사의 중요한 목적은 혈액의 pH와
            혈중 탄산, 젖산수치, 전해질수치 (나트륨, 칼륨,염소, 이온화된 칼슘), 음이온갭을 측정하는데 있습니다. 동맥혈
            혈액가 스는 채취하기 매우 어렵고, 과한 진정을 필요로 할 수 있으며, 혈종을 일으킬 수 있어, 일반적으로 정맥혈
            가스검사 로 대체하는 경우가 많습니다. 가스검사를 통해 비교적 적은 양의 혈액을 가지고 산-염기 불균형 유무 및
            호흡기와 콩 팥을 통한 적절한 보상반응이 있는지 확인할 수 있습니다. 또한 혈청화학검사에서 측정할 수 있는
            총칼슘수치는 단백 질에 결합되어 있으므로 단백질수치에 영향을 받으나, 가스검사상에서는 단백질에 결합
            되어있지 않은 유리된 칼슘 (iCa: 이온화칼슘)을 측정할 수 있다는 장점이 있습니다."
              top="260px"
            />
            <BloodExamTable />
            <ContentTitle
              title="혈청화학검사 (장기기능검사/ wet 장비, dry 장비)"
              top="1300px"
            />
            <ContentDescription
              description="흔히 알고 있는 콩팥, 간, 혈청단백질, 혈당 등을 검사하는 검사입니다. 아이들은 장기의 기능이 특정수준
            이상으로 떨어진 경우에 증상을 나타내게 되며, 이는 사람에서도 마찬가지입니다. 사람도 혈액검사를 하기
            전까지는 자신이 고지혈증인지 알지 못한 채 특별한 증상없이 살아가다가, 특정 수준이상으로 악화되어 동맥경화,
            심근경색 등이 발생하면 그 때서야 진단이 이뤄지게 됩니다. 따라서, 주기적인 혈액검사를 통해 각종 장기
            수치들을 확인하고, 그에 맞는 건강관리, 영양제 및 사료를 선택 하시는 것이, 특히 우리와 대화할 수 없는 한계를
            가진 반려동물들을 건강하게 관리하는데 매우 중요합니다. 수치의 이상 정도에 따라 추가적인 영상검사들이
            추천될 수 있습니다. 혈액의 용혈이나 고지혈증에 따라 수치들은 영향을 받을 수 있으며 식 후 예민하게 변하는
            수치들이 있으므로, 금식한 상태에서의 혈액검사를 추천 드립니다."
              top="1340px"
            />
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
