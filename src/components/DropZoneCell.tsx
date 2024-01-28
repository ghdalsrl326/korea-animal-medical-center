/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useDropzone } from "react-dropzone";

interface DropZoneCellProps {
  dropzoneProps: ReturnType<typeof useDropzone>;
  imageSrc: string | null;
  rowSpan?: number;
  colSpan?: number;
  width: number | string;
  height: number | string;
}

const DropZoneCell = ({
  dropzoneProps,
  imageSrc,
  rowSpan,
  colSpan,
  width,
  height,
}: DropZoneCellProps) => {
  return (
    <td
      {...dropzoneProps.getRootProps()}
      style={{
        cursor: "pointer",
        border: "1px dashed grey",
        textAlign: "center",
      }}
      width={width}
      height={height}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      <input {...dropzoneProps.getInputProps()} />
      {imageSrc ? (
        <img
          src={imageSrc}
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
  );
};

export default DropZoneCell;
