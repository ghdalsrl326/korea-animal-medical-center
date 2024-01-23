"use client";
import { Input } from "antd";
import React from "react";

const HealthExamSummaryTable = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "260px",
      }}
    >
      <table style={{ width: "100%", border: "3px solid #E6A2A7" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#E6A2A7",
              color: "#fff",
            }}
          >
            <th>신체검사</th>
            <th>소견</th>
            <th>신체검사</th>
            <th>소견</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>활력징후</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <th>BCS, MCS</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>

          <tr>
            <th>체표림프절</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <th>근골격계</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <th>청진(심장/폐음)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <th>생식기계</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <th>비강/인후/경부</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <th>중성화유무</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthExamSummaryTable;
