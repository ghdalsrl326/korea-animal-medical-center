/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Flex } from "antd";
import CoverCard from "@/components/CoverCard";
import NavigationTab from "@/components/NavigationTab";
import CoverTitle from "@/components/CoverTitle";
import { useData } from "@/app/contexts/DataContext";
import FloatButtonGroup from "@/components/FloatButtonGroup";

const page = () => {
  const componentRef = useRef(null);
  const { data, date, myInfo } = useData();

  return (
    <>
      <div ref={componentRef}>
        <Flex vertical align="center">
          <div
            style={{ position: "relative", width: "1128px", height: "1634px" }}
          >
            <Image
              src="/images/cover.png"
              alt="cover"
              layout="fill"
              quality={100}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", top: "40px", right: "20px" }}>
              <CoverCard data={data} date={date} />
            </div>
            <div style={{ position: "absolute", top: "400px", right: "140px" }}>
              <CoverTitle date={date} />
            </div>
          </div>
        </Flex>
      </div>
      <NavigationTab />
      <FloatButtonGroup componentRef={componentRef} admin={myInfo?.isAdmin} />
    </>
  );
};

export default page;
