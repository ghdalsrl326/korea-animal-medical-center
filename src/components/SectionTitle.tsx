import React from "react";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import SectionCard from "./SectionCard";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div>
      <Image
        src="/images/sectionTitle.png"
        alt="section-title"
        layout="fill"
        quality={100}
        style={{ objectFit: "contain", objectPosition: "top" }}
      />
      <Flex
        vertical={false}
        justify="center"
        style={{
          position: "absolute",
          width: "100%",
          top: "85px",
        }}
      >
        <Title
          level={2}
          style={{
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {title}
        </Title>
      </Flex>
      <Flex
        vertical={false}
        justify="center"
        style={{
          position: "absolute",
          width: "100%",
          top: "80px",
          left: "-400px",
        }}
      >
        <Image
          src="/images/logoBrown.png"
          alt="logoBrown"
          width={264}
          height={35}
        />
      </Flex>
      <Flex
        vertical={false}
        justify="center"
        style={{
          position: "absolute",
          width: "100%",
          top: "30px",
          left: "400px",
        }}
      >
        <SectionCard />
      </Flex>
    </div>
  );
};

export default SectionTitle;
