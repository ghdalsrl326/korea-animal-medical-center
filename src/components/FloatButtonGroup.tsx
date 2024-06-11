"use client";
import React, { RefObject } from "react";
import { FloatButton, message } from "antd";
import {
  FileTextOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import ReactToPrint from "react-to-print";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/service/authClient";
import { URL } from "@/app/data/url";
import { useResetAllStores } from "@/app/data/resetAllStores";
import { useAtom } from "jotai";
import { bloodExamResultAtom } from "@/app/data/bloodExamResultStore";
import { configAtom, initialConfig } from "@/app/data/configStore";
import { examResultAtom } from "@/app/data/examResultStore";
import { healthExamDetailAtom } from "@/app/data/healthExamDetailStore";
import { healthExamSummaryAtom } from "@/app/data/healthExamSummaryStore";
import { questionnaireAtom } from "@/app/data/questionnaireStore";
import { radiationExamAtom } from "@/app/data/radiationExamStore";

type Props = {
  componentRef?: RefObject<HTMLDivElement>;
  admin?: boolean;
};

const FloatButtonGroup = ({ componentRef, admin }: Props) => {
  const router = useRouter();
  const resetAllStores = useResetAllStores();
  // const [bloodExamResult, setBloodExamResult] = useAtom(bloodExamResultAtom);
  // const [config, setConfig] = useAtom(configAtom);
  // const [examResult, setExamResult] = useAtom(examResultAtom);
  // const [healthExamDetail, setHealthExamDetail] = useAtom(healthExamDetailAtom);
  // const [healthExamSummary, setHealthExamSummary] = useAtom(
  //   healthExamSummaryAtom
  // );
  // const [questionnarie, setQuestionnaire] = useAtom(questionnaireAtom);
  // const [radiationExam, setRadiationExam] = useAtom(radiationExamAtom);

  const onChangeMode = async () => {
    router.refresh();
    // setBloodExamResult(bloodExamResultAtom.init);
    // setConfig(initialConfig);
    // setExamResult(examResultAtom.init);
    // setHealthExamDetail(healthExamDetailAtom.init);
    // setHealthExamSummary(healthExamSummaryAtom.init);
    // setQuestionnaire(questionnaireAtom.init);
    // setRadiationExam(radiationExamAtom.init);

    router.push(URL.MODE);
  };

  const onLogout = async () => {
    const result = await handleLogout();
    if (result.error) {
      message.error(result.error);
    } else {
      message.success("Successfully logged out");
      await resetAllStores();
      router.push(URL.LOGIN);
    }
  };

  return (
    <FloatButton.Group
      shape="square"
      style={{
        bottom: "80px",
        right: "40px",
      }}
    >
      {!admin && (
        <FloatButton
          icon={<HomeOutlined />}
          shape="square"
          tooltip={<div>신규/조회</div>}
          onClick={onChangeMode}
        />
      )}
      <FloatButton
        icon={<LogoutOutlined />}
        shape="square"
        tooltip={<div>로그아웃</div>}
        onClick={onLogout}
      />
      {!admin && componentRef?.current && (
        <ReactToPrint
          trigger={() => (
            <FloatButton icon={<FileTextOutlined />} tooltip={<div>PDF</div>} />
          )}
          content={() => componentRef.current}
          copyStyles={true}
          pageStyle="@page { size: 1300px 2000px; -webkit-print-color-adjust: exact; }"
        />
      )}
    </FloatButton.Group>
  );
};

export default FloatButtonGroup;
