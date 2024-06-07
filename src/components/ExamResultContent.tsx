"use client";
import { Flex } from "antd";
import React, { useEffect, useState } from "react";
import Signature from "@/components/Signature";
import dynamic from "next/dynamic";
import { examResultAtom } from "@/app/data/examResultStore";
import { useAtom } from "jotai";
import { ResGetMyInfo } from "@/types/Doctor";
import { useParams } from "next/navigation";
import { fetchSignatureByQid } from "@/service/adminClient";

const ReactQuill = dynamic(() => import("../components/QuillEditor"), {
  ssr: false,
});

type Props = {
  myInfo: ResGetMyInfo;
};

const ExamResultContent = ({ myInfo }: Props) => {
  const [result, setResult] = useAtom(examResultAtom);
  const params = useParams();
  const { qid } = params;
  const [signature, setSignature] = useState<string>("");

  const getSignature = async () => {
    try {
      const res = await fetchSignatureByQid(qid as string);
      setSignature(res.signatureUrl);
    } catch (error) {
      console.error("Failed to fetch signature:", error);
    }
  };

  useEffect(() => {
    if (qid) {
      getSignature();
    }
  }, [qid]);

  return (
    <Flex vertical justify="start" gap="large">
      <ReactQuill
        content={result.generalComment}
        onChange={(content) =>
          setResult((prev) => ({ ...prev, generalComment: content }))
        }
      />
      <Signature src={signature} />
    </Flex>
  );
};

export default ExamResultContent;
