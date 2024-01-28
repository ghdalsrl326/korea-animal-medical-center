"use client";
import { Flex } from "antd";
import React from "react";
import Signature from "@/components/Signature";
import dynamic from "next/dynamic";
import { examResultAtom } from "@/app/data/examResultStore";
import { useAtom } from "jotai";

const ReactQuill = dynamic(() => import("../components/QuillEditor"), {
  ssr: false,
});

const ExamResultContent = () => {
  const [result, setResult] = useAtom(examResultAtom);

  return (
    <Flex vertical justify="start" gap="large">
      <ReactQuill
        content={result.editorContent}
        onChange={(content) =>
          setResult((prev) => ({ ...prev, editorContent: content }))
        }
      />
      <Signature />
    </Flex>
  );
};

export default ExamResultContent;
