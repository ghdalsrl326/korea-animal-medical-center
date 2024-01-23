import React from "react";

type Props = {
  title: string;
};

const SectionSubTitle = ({ title }: Props) => {
  return (
    <div
      style={{
        position: "inherit",
        width: "100%",
        height: "50px",
        top: "180px",
        borderBottom: "1px solid black",
      }}
    >
      <div
        style={{
          width: "fit-content",
          height: "100%",
          position: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#434343",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "white",
            paddingLeft: "70px",
            paddingRight: "70px",
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SectionSubTitle;
