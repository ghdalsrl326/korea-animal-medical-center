"use client";
import { healthExamSummaryAtom } from "@/app/data/healthExamSummaryStore";
import { Input } from "antd";
import { useAtom } from "jotai";
import React from "react";

const HealthExamSummaryTable = () => {
  const [summary, setSummary] = useAtom(healthExamSummaryAtom);

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
                value={summary.vitalSign}
                onChange={(e) =>
                  setSummary({ ...summary, vitalSign: e.target.value })
                }
              />
            </td>
            <th>BCS, MCS</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                value={summary.bcsMcs}
                onChange={(e) =>
                  setSummary({ ...summary, bcsMcs: e.target.value })
                }
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
                value={summary.lymphNode}
                onChange={(e) =>
                  setSummary({ ...summary, lymphNode: e.target.value })
                }
              />
            </td>
            <th>근골격계</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                value={summary.musculoskeletal}
                onChange={(e) =>
                  setSummary({ ...summary, musculoskeletal: e.target.value })
                }
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
                value={summary.auscultation}
                onChange={(e) =>
                  setSummary({ ...summary, auscultation: e.target.value })
                }
              />
            </td>
            <th>생식기계</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                value={summary.reproductive}
                onChange={(e) =>
                  setSummary({ ...summary, reproductive: e.target.value })
                }
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
                value={summary.nasal}
                onChange={(e) =>
                  setSummary({ ...summary, nasal: e.target.value })
                }
              />
            </td>
            <th>중성화유무</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                value={summary.neutered}
                onChange={(e) =>
                  setSummary({ ...summary, neutered: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthExamSummaryTable;
