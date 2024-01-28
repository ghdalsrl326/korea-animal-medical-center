"use client";
import { imageAcceptOnly } from "@/app/data/constants";
import { radiationExamAtom } from "@/app/data/radiationExamStore";
import { useAtom } from "jotai";
import React from "react";
import { useDropzone } from "react-dropzone";
import DropZoneCell from "./DropZoneCell";
import RadiationExamTable from "./RadiationExamTable";
import { Flex } from "antd";

const RadiationExamImageTable = () => {
  const [result, setResult] = useAtom(radiationExamAtom);

  const { imgCellWidth, imgCellHeight } = {
    imgCellWidth: "50%",
    imgCellHeight: "auto",
  };

  const onDrop = (imageKey: keyof typeof result) => (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setResult((prev) => ({ ...prev, [imageKey]: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const dropzoneProps1 = useDropzone({
    onDrop: onDrop("image1"),
    accept: imageAcceptOnly,
  });
  const dropzoneProps2 = useDropzone({
    onDrop: onDrop("image2"),
    accept: imageAcceptOnly,
  });
  const dropzoneProps3 = useDropzone({
    onDrop: onDrop("image3"),
    accept: imageAcceptOnly,
  });
  const dropzoneProps4 = useDropzone({
    onDrop: onDrop("image4"),
    accept: imageAcceptOnly,
  });
  const dropzoneProps5 = useDropzone({
    onDrop: onDrop("image5"),
    accept: imageAcceptOnly,
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
                imageSrc={result.image1}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
              />
              <DropZoneCell
                dropzoneProps={dropzoneProps2}
                imageSrc={result.image2}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
              />
            </tr>
            <tr></tr>
            <tr>
              <DropZoneCell
                dropzoneProps={dropzoneProps3}
                imageSrc={result.image3}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
              />
              <DropZoneCell
                dropzoneProps={dropzoneProps4}
                imageSrc={result.image4}
                rowSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
              />
            </tr>
            <tr></tr>
            <tr>
              <DropZoneCell
                dropzoneProps={dropzoneProps5}
                imageSrc={result.image5}
                rowSpan={2}
                colSpan={2}
                width={imgCellWidth}
                height={imgCellHeight}
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
