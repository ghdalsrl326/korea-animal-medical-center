import { Input } from "antd";
import React from "react";

const BloodExamTable = () => {
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
          <tr
            style={{
              backgroundColor: "#E6A2A7",
              color: "#fff",
            }}
          >
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
          <tr>
            <td>WBC (백혈구수)</td>
            <td>6-17</td>
            <td>K/ul</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>RBC (적혈구수)</td>
            <td>5.5-8.5</td>
            <td>M/ul</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>HGB (혈색소)</td>
            <td>12-18</td>
            <td>g/dl</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>HCT (적혈구용적)</td>
            <td>37-55</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>MCV (평균적혈구용적)</td>
            <td>60-77</td>
            <td>fl</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>MCH (평균적혈구혈색소량)</td>
            <td>19.5-24.5</td>
            <td>pg</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>MCHC (평균적혈구혈색소농도)</td>
            <td>32-36</td>
            <td>g/dl</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>PLT (혈소판)</td>
            <td>200-500</td>
            <td>1000/mm3</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>%BASO (호염구)</td>
            <td>&nbsp;</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>BASO (호염구)</td>
            <td>0-0.1</td>
            <td>K/uL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>%EOS (호산구)</td>
            <td>&nbsp;</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>EOS (호산구)</td>
            <td>0.06-1.23</td>
            <td>K/uL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>%LYM (림프구)</td>
            <td>&nbsp;</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>LYM (림프구)</td>
            <td>1.05-5.1</td>
            <td>K/uL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>%MONO (단핵구)</td>
            <td>&nbsp;</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>MONO (단핵구)</td>
            <td>0.16-1.12</td>
            <td>K/uL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>%NEU (호중구)</td>
            <td>&nbsp;</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>NEU (호중구)</td>
            <td>2.7-12.5</td>
            <td>K/uL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>%RETIC (세망적혈구)</td>
            <td>&nbsp;</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>RETIC (세망적혈구)</td>
            <td>10-110</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>MPV</td>
            <td>8.7-13.2</td>
            <td>fL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>PCT</td>
            <td>0.14-0.46</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>PDW</td>
            <td>13.6-21.7</td>
            <td>fL</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
          </tr>
          <tr>
            <td>RDW</td>
            <td>13.6-21.7</td>
            <td>%</td>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </td>
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

export default BloodExamTable;
