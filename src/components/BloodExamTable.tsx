"use client";
import React from "react";
import { useAtom } from "jotai";
import { Input } from "antd";
import { bloodExamResultAtom } from "@/app/data/bloodExamResultStore";

const cellStyle: React.CSSProperties = { textAlign: "center" };
const abnormalCellStyle: React.CSSProperties = {
  backgroundColor: "#f9eded",
  color: "#ca4a42",
  fontWeight: 700,
};
const refRangeStyle: React.CSSProperties = { backgroundColor: "#e6e8ea" };

const isAbnormal = (value: string, min: number, max: number) =>
  parseFloat(value) < min || parseFloat(value) > max;

const TableCell = ({
  value,
  range,
  onChange,
}: {
  value: string;
  range: number[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const style: React.CSSProperties = isAbnormal(value, range[0], range[1])
    ? { ...cellStyle, ...abnormalCellStyle }
    : cellStyle;

  return (
    <td style={style}>
      <Input
        size="large"
        variant="borderless"
        style={style}
        value={value}
        onChange={onChange}
      />
    </td>
  );
};

const BloodExamTable = () => {
  const [result, setResult] = useAtom(bloodExamResultAtom);
  const tests = [
    { key: "pH", label: "pH (산/염기균형)", range: [7.31, 7.46] },
    {
      key: "pCO2",
      label: "pCO2 (이산화탄소분압)",
      range: [27, 50],
      unit: "mmHg",
    },
    { key: "pO2", label: "pO2 (산소분압)", range: [24, 48], unit: "mmHg" },
    { key: "Na", label: "Na+ (나트륨)", range: [135, 145], unit: "mmol/L" },
    { key: "K", label: "K+ (칼륨)", range: [3.5, 5.1], unit: "mmol/L" },
    { key: "Cl", label: "Cl- (염소)", range: [98, 107], unit: "mmol/L" },
    {
      key: "iCa",
      label: "iCa (이온화칼슘)",
      range: [1.16, 1.4],
      unit: "mmol/L",
    },
    {
      key: "HCT",
      label: "HCT (적혈구용적/빈혈)",
      range: [37.5, 51.0],
      unit: "%",
    },
    {
      key: "Glucose",
      label: "Glucose (혈당)",
      range: [70, 110],
      unit: "mg/dL",
    },
    {
      key: "Lactate",
      label: "Lactate (젖산)",
      range: [0.5, 2.2],
      unit: "mmol/L",
    },
    {
      key: "AnionGap",
      label: "Anion Gap (음이온차이)",
      range: [8, 16],
      unit: "mmol/L",
    },
    {
      key: "HCO3",
      label: "HCO3- (중탄산이온)",
      range: [22, 29],
      unit: "mmol/L",
    },
  ];

  const handleChange =
    (key: string, part: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setResult({ ...result, [`${key}${part}`]: e.target.value });
    };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "520px",
      }}
    >
      <table style={{ width: "100%", border: "3px solid #E6A2A7" }}>
        <thead>
          <tr style={{ backgroundColor: "#E6A2A7", color: "#fff" }}>
            <th>검사항목</th>
            <th colSpan={2}>참고범위</th>
            <th>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", color: "#fff" }}
                autoFocus
              />
            </th>
            <th>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", color: "#fff" }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.key}>
              <td>{test.label}</td>
              <td style={refRangeStyle}>{test.range.join("-")}</td>
              <td style={refRangeStyle}>{test.unit}</td>
              <TableCell
                value={result[`${test.key}First` as keyof typeof result]}
                range={test.range}
                onChange={handleChange(test.key, "First")}
              />
              <TableCell
                value={result[`${test.key}Second` as keyof typeof result]}
                range={test.range}
                onChange={handleChange(test.key, "Second")}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodExamTable;