"use client";
import React, { useEffect, useState } from "react";
import { Divider, Tabs } from "antd";
import Image from "next/image";
import { NavigationItem, navigation } from "@/app/data/navigation";
import { useRouter } from "next/navigation";

const NavigationTab = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<NavigationItem>(navigation[0]);
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    router.push(activeTab.path);
  }, [activeTab, router]);

  return (
    <div>
      <span
        onClick={toggleVisibility}
        style={{
          position: "fixed",
          right: "45%",
          bottom: visible ? "20px" : "-20px",
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
          type="line"
          tabPosition="bottom"
          items={navigation.map((tab) => {
            return {
              label: tab.name,
              key: tab.name,
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
          }}
          tabBarGutter={0}
          onTabClick={(tab) => {
            setActiveTab(
              navigation.find((item) => item.name === tab) ?? navigation[0]
            );
          }}
        />
      )}
    </div>
  );
};

export default NavigationTab;
