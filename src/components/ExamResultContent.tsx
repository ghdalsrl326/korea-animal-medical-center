"use client";
import { Flex } from "antd";
import React from "react";
import Signature from "@/components/Signature";
import dynamic from "next/dynamic";
import { examResultAtom } from "@/app/data/examResultStore";
import { useAtom } from "jotai";
import { ResGetMyInfo } from "@/types/Doctor";

const ReactQuill = dynamic(() => import("../components/QuillEditor"), {
  ssr: false,
});

type Props = {
  myInfo: ResGetMyInfo;
};

const ExamResultContent = ({ myInfo }: Props) => {
  const [result, setResult] = useAtom(examResultAtom);

  return (
    <Flex vertical justify="start" gap="large">
      <ReactQuill
        content={result.generalComment}
        onChange={(content) =>
          setResult((prev) => ({ ...prev, generalComment: content }))
        }
      />
      <Signature src={myInfo.signature} />
    </Flex>
  );
};

export default ExamResultContent;
