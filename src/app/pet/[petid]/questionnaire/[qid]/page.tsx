/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { configAtom } from "@/app/data/configStore";
import { ReportMetaProps } from "@/app/data/reportMeta";

const Page = ({ data, date, petid, qid }: ReportMetaProps) => {
  return <div></div>;
};

export default Page;
