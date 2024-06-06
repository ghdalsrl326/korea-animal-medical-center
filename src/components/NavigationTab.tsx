"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import Image from "next/image";
import { navigation } from "@/app/data/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAtom } from "jotai";
import { configAtom } from "@/app/data/configStore";
import { URL } from "@/app/data/url";
import { useParams } from "next/navigation";

const NavigationTab = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [config, setConfig] = useAtom(configAtom);
  const params = useParams<{ qid: string }>();

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <span
        onClick={toggleVisibility}
        style={{
          position: "fixed",
          right: "48%",
          bottom: visible ? "22px" : "-20px",
          zIndex: 1,
        }}
      >
        {visible ? (
          <Image
            src="/icons/ArrowDown.svg"
            alt="ArrowDown"
            width={80}
            height={80}
          />
        ) : (
          <Image
            src="/icons/ArrowUp.svg"
            alt="ArrowUp"
            width={80}
            height={80}
          />
        )}
      </span>
      {visible && (
        <Tabs
          activeKey={pathname}
          type="line"
          tabPosition="bottom"
          items={navigation.map((tab) => {
            return {
              label: <Link href={tab.path}>{tab.name}</Link>,
              key: tab.path,
            };
          })}
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            marginTop: 0,
          }}
          tabBarStyle={{
            borderTop: "5px solid black",
            background: "#fff",
          }}
          tabBarGutter={0}
          onTabClick={(key) => {
            console.log(params.qid);
            if (key === URL.QUESTIONNAIRE) {
              if (params.qid) {
                router.push(
                  `${URL.PET}/${config.petId}${URL.QUESTIONNAIRE}/${params.qid}`
                );
              } else {
                router.push(`${URL.PET}/${config.petId}${URL.QUESTIONNAIRE}`);
              }
            } else {
              router.push(
                `${URL.PET}/${config.petId}${URL.QUESTIONNAIRE}/${config.qid}/${key}`
              );
            }
          }}
        />
      )}
    </div>
  );
};

export default NavigationTab;
