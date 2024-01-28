"use client";
import { Input } from "antd";
import React from "react";
import dynamic from "next/dynamic";
import { useAtom } from "jotai";
import { radiationExamAtom } from "@/app/data/radiationExamStore";

const ReactQuill = dynamic(() => import("../components/QuillEditor"), {
  ssr: false,
});

const RadiationExamTable = () => {
  const [result, setResult] = useAtom(radiationExamAtom);

  return (
    <table style={{ width: "100%", border: "3px solid #E6A2A7" }}>
      <thead>
        <tr
          style={{
            backgroundColor: "#E6A2A7",
            color: "#fff",
          }}
        >
          <th style={{ width: "200px" }}>신체검사</th>
          <th>소견</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>흉/복부 방사선</th>
          <td>
            <ReactQuill
              content={result.thoracoabdominal}
              onChange={(content) =>
                setResult((prev) => ({ ...prev, thoracoabdominal: content }))
              }
            />
          </td>
        </tr>
        <tr>
          <th>소견</th>
          <td>
            <ReactQuill
              content={result.opinion}
              onChange={(content) =>
                setResult((prev) => ({ ...prev, opinion: content }))
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RadiationExamTable;
