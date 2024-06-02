/* eslint-disable @next/next/no-img-element */
"use client";
import { Checkbox, Input } from "antd";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useAtom } from "jotai";
import { healthExamDetailAtom } from "@/app/data/healthExamDetailStore";
import DropZoneCell from "./DropZoneCell";

const HealthExamDetailTable = () => {
  const [detail, setDetail] = useAtom(healthExamDetailAtom);

  const { imgCellWidth, imgCellHeight } = {
    imgCellWidth: 170,
    imgCellHeight: 241,
  };

  const handleSingleChoiceChange = (questionKey: string, option: string) => {
    if (option === detail[questionKey as keyof typeof detail]) {
      setDetail((prev) => ({ ...prev, [questionKey]: "" }));
      return;
    }
    setDetail((prev) => ({ ...prev, [questionKey]: option }));
  };

  const onDrop = (imageKey: keyof typeof detail, acceptedFile: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDetail((prev) => ({ ...prev, [imageKey]: reader.result as string }));
    };
    reader.readAsDataURL(acceptedFile);
  };

  const dropzoneProps1 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("skinPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps2 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("skinPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps3 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("skinPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps4 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("eyesPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps5 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("eyesPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps6 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("eyesPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps7 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("teethPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps8 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("teethPictures", acceptedFiles[0]),
    maxFiles: 1,
  });
  const dropzoneProps9 = useDropzone({
    onDrop: (acceptedFiles) => onDrop("teethPictures", acceptedFiles[0]),
    maxFiles: 1,
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
                value={detail.skin}
                onChange={(e) => setDetail({ ...detail, skin: e.target.value })}
              />
            </td>
            <DropZoneCell
              dropzoneProps={dropzoneProps1}
              imageSrc={detail.skinPictures ? detail.skinPictures[0] : null}
              rowSpan={4}
              width={imgCellWidth}
              height={imgCellHeight}
            />
            <DropZoneCell
              dropzoneProps={dropzoneProps2}
              imageSrc={detail.skinPictures ? detail.skinPictures[1] : null}
              rowSpan={4}
              width={imgCellWidth}
              height={imgCellHeight}
            />
            <DropZoneCell
              dropzoneProps={dropzoneProps3}
              imageSrc={detail.skinPictures ? detail.skinPictures[2] : null}
              rowSpan={4}
              width={imgCellWidth}
              height={imgCellHeight}
            />
          </tr>
          <tr>
            <th>피모</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.coat}
                onChange={(e) => setDetail({ ...detail, coat: e.target.value })}
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
                value={detail.rightEar}
                onChange={(e) =>
                  setDetail({ ...detail, rightEar: e.target.value })
                }
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
                value={detail.leftEar}
                onChange={(e) =>
                  setDetail({ ...detail, leftEar: e.target.value })
                }
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
                value={detail.rightFluoresceinStaining}
                onChange={(e) =>
                  setDetail({
                    ...detail,
                    rightFluoresceinStaining: e.target.value,
                  })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.rightFluoresceinStainingLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange(
                      "rightFluoresceinStainingLevel",
                      option
                    )
                  }
                />
              </td>
            ))}
            <DropZoneCell
              dropzoneProps={dropzoneProps4}
              imageSrc={detail.eyesPictures ? detail.eyesPictures[0] : null}
              rowSpan={8}
              width={imgCellWidth}
              height={imgCellHeight}
            />
            <DropZoneCell
              dropzoneProps={dropzoneProps5}
              imageSrc={detail.eyesPictures ? detail.eyesPictures[1] : null}
              rowSpan={8}
              width={imgCellWidth}
              height={imgCellHeight}
            />
            <DropZoneCell
              dropzoneProps={dropzoneProps6}
              imageSrc={detail.eyesPictures ? detail.eyesPictures[2] : null}
              rowSpan={8}
              width={imgCellWidth}
              height={imgCellHeight}
            />
          </tr>
          <tr>
            <th>형광염색(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.leftFluoresceinStaining}
                onChange={(e) =>
                  setDetail({
                    ...detail,
                    leftFluoresceinStaining: e.target.value,
                  })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.leftFluoresceinStainingLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange(
                      "leftFluoresceinStainingLevel",
                      option
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>눈물량(우)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.rightTearProduction}
                onChange={(e) =>
                  setDetail({ ...detail, rightTearProduction: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.rightTearProductionLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("rightTearProductionLevel", option)
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>눈물량(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.leftTearProduction}
                onChange={(e) =>
                  setDetail({ ...detail, leftTearProduction: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.leftTearProductionLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("leftTearProductionLevel", option)
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>안압(우)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.rightIntraocularPressure}
                onChange={(e) =>
                  setDetail({
                    ...detail,
                    rightIntraocularPressure: e.target.value,
                  })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.rightIntraocularPressureLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange(
                      "rightIntraocularPressureLevel",
                      option
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>안압(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.leftIntraocularPressure}
                onChange={(e) =>
                  setDetail({
                    ...detail,
                    leftIntraocularPressure: e.target.value,
                  })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.leftIntraocularPressureLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange(
                      "leftIntraocularPressureLevel",
                      option
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>Slir검사소견</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.slirInpection}
                onChange={(e) =>
                  setDetail({ ...detail, slirInpection: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.slirInpectionLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("slirInpectionLevel", option)
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th>외관검사</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.externalAppearance}
                onChange={(e) =>
                  setDetail({ ...detail, externalAppearance: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.externalAppearanceLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("externalAppearanceLevel", option)
                  }
                />
              </td>
            ))}
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
                value={detail.malocclusion}
                onChange={(e) =>
                  setDetail({ ...detail, malocclusion: e.target.value })
                }
              />
            </td>
            <DropZoneCell
              dropzoneProps={dropzoneProps7}
              imageSrc={detail.teethPictures ? detail.teethPictures[0] : null}
              rowSpan={5}
              width={imgCellWidth}
              height={imgCellHeight}
            />
            <DropZoneCell
              dropzoneProps={dropzoneProps8}
              imageSrc={detail.teethPictures ? detail.teethPictures[1] : null}
              rowSpan={5}
              width={imgCellWidth}
              height={imgCellHeight}
            />
            <DropZoneCell
              dropzoneProps={dropzoneProps9}
              imageSrc={detail.teethPictures ? detail.teethPictures[2] : null}
              rowSpan={5}
              width={imgCellWidth}
              height={imgCellHeight}
            />
          </tr>
          <tr>
            <th>치아결손</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.missingTeeth}
                onChange={(e) =>
                  setDetail({ ...detail, missingTeeth: e.target.value })
                }
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
                value={detail.brokenTeeth}
                onChange={(e) =>
                  setDetail({ ...detail, brokenTeeth: e.target.value })
                }
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
                value={detail.retainedDeciduousTeeth}
                onChange={(e) =>
                  setDetail({
                    ...detail,
                    retainedDeciduousTeeth: e.target.value,
                  })
                }
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
                value={detail.tartarPeriodontalDisease}
                onChange={(e) =>
                  setDetail({
                    ...detail,
                    tartarPeriodontalDisease: e.target.value,
                  })
                }
              />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default HealthExamDetailTable;
