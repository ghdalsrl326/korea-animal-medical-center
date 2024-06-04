"use client";
import { radiationExamAtom } from "@/app/data/radiationExamStore";
import { useAtom } from "jotai";
import React, { useState } from "react";
import DropZoneCell from "./DropZoneCell";
import RadiationExamTable from "./RadiationExamTable";
import { Flex } from "antd";
import { useDropzone } from "react-dropzone";

const RadiationExamImageTable = () => {
  const [result, setResult] = useAtom(radiationExamAtom);
  const { imgCellWidth, imgCellHeight } = {
    imgCellWidth: "50%",
    imgCellHeight: "auto",
  };

  const onDrop = (imageKey: keyof typeof result, acceptedFile: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setResult((prev) => ({ ...prev, [imageKey]: reader.result as string }));
    };
    reader.readAsDataURL(acceptedFile);
  };

  const dropzoneProps1 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("radiographyImage1", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps2 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("radiographyImage2", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps3 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("radiographyImage3", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps4 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("radiographyImage4", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps5 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("radiographyImage5", acceptedFiles[0]),
    maxFiles: 1,
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "260px",
      }}
    >
      <Flex vertical gap="large">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <DropZoneCell
                dropzoneProps={dropzoneProps1}
                imageSrc={result.radiographyImage1}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
                maxHeight={"380px"}
              />
              <DropZoneCell
                dropzoneProps={dropzoneProps2}
                imageSrc={result.radiographyImage2}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
                maxHeight={"380px"}
              />
            </tr>
            <tr></tr>
            <tr>
              <DropZoneCell
                dropzoneProps={dropzoneProps3}
                imageSrc={result.radiographyImage3}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
                maxHeight={"380px"}
              />
              <DropZoneCell
                dropzoneProps={dropzoneProps4}
                imageSrc={result.radiographyImage4}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
                maxHeight={"380px"}
              />
            </tr>
            <tr></tr>
            <tr>
              <DropZoneCell
                dropzoneProps={dropzoneProps5}
                imageSrc={result.radiographyImage5}
                rowSpan={2}
                colSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
                maxHeight={"380px"}
              />
            </tr>
          </tbody>
        </table>
        <RadiationExamTable />
      </Flex>
    </div>
  );
};

export default RadiationExamImageTable;
