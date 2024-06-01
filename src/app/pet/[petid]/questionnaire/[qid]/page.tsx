/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { configAtom } from "@/app/data/configStore";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const page = () => {
  const [config, setConfig] = useAtom(configAtom);
  const searchParams = useSearchParams();

  const qid = searchParams.get("qid");
  console.log("qid", qid);

  useEffect(() => {
    console.log("qid", qid);
    qid &&
      setConfig((prev) => ({
        ...prev,
        qid: qid,
      }));
  }, []);

  return <div></div>;
};

export default page;
