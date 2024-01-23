"use client";
import { Button, Checkbox, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const HealthExamDetailTable = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { imgCellWidth, imgCellHeight } = {
    imgCellWidth: 170,
    imgCellHeight: 241,
  };

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "600px",
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
            <th
              rowSpan={5}
              style={{
                background: "#fff",
                color: "#000",
                border: "3px solid #E6A2A7",
              }}
            >
              피부
            </th>
            <th>검사항목</th>
            <th colSpan={4}>소견</th>
            <th colSpan={3}>사진</th>
          </tr>
          <tr>
            <th>피부</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td
              rowSpan={4}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
            <td
              rowSpan={4}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
            <td
              rowSpan={4}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
          </tr>
          <tr>
            <th>피모</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
          <tr>
            <th>귀(우)</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
          <tr>
            <th>귀(좌)</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
        </thead>
        <thead>
          <tr
            style={{
              backgroundColor: "#E6A2A7",
              color: "#fff",
            }}
          >
            <th
              rowSpan={9}
              style={{
                background: "#fff",
                color: "#000",
                border: "3px solid #E6A2A7",
              }}
            >
              안과
            </th>
            <th>검사항목</th>
            <th>결과</th>
            <th>낮음</th>
            <th>정상</th>
            <th>높음</th>
            <th colSpan={3}>사진</th>
          </tr>
          <tr>
            <th>형광염색(우)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td
              rowSpan={8}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
            <td
              rowSpan={8}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
            <td
              rowSpan={8}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
          </tr>
          <tr>
            <th>형광염색(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <th>눈물량(우)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <th>눈물량(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <th>안압(우)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <th>안압(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <th>Slir검사소견</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
          <tr>
            <th>외관검사</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
            <td style={{ textAlign: "center" }}>
              <Checkbox />
            </td>
          </tr>
        </thead>
        <thead>
          <tr
            style={{
              backgroundColor: "#E6A2A7",
              color: "#fff",
            }}
          >
            <th
              rowSpan={6}
              style={{
                background: "#fff",
                color: "#000",
                border: "3px solid #E6A2A7",
              }}
            >
              치과
            </th>
            <th>검사항목</th>
            <th colSpan={4}>소견</th>
            <th colSpan={3}>사진</th>
          </tr>
          <tr>
            <th>부정교합유무</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
            <td
              rowSpan={5}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
            <td
              rowSpan={5}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
            <td
              rowSpan={5}
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "1px dashed grey",
                textAlign: "center",
              }}
              width={imgCellWidth}
              height={imgCellHeight}
            >
              <input {...getInputProps()} />
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>이미지 업로드</p>
              )}
            </td>
          </tr>
          <tr>
            <th>치아결손</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
          <tr>
            <th>부러진 치아</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
          <tr>
            <th>부러진 치아잔존유치</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
          <tr>
            <th>치석/치주질환</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default HealthExamDetailTable;
