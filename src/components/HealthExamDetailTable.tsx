"use client";
import { Checkbox, Input } from "antd";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useAtom } from "jotai";
import { healthExamDetailAtom } from "@/app/data/healthExamDetailStore";

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

  const onDrop = (imageKey: keyof typeof detail) => (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDetail((prev) => ({ ...prev, [imageKey]: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const dropzoneProps1 = useDropzone({ onDrop: onDrop("skinImage1") });
  const dropzoneProps2 = useDropzone({ onDrop: onDrop("skinImage2") });
  const dropzoneProps3 = useDropzone({ onDrop: onDrop("skinImage3") });
  const dropzoneProps4 = useDropzone({ onDrop: onDrop("eyeImage1") });
  const dropzoneProps5 = useDropzone({ onDrop: onDrop("eyeImage2") });
  const dropzoneProps6 = useDropzone({ onDrop: onDrop("eyeImage3") });
  const dropzoneProps7 = useDropzone({ onDrop: onDrop("toothImage1") });
  const dropzoneProps8 = useDropzone({ onDrop: onDrop("toothImage2") });
  const dropzoneProps9 = useDropzone({ onDrop: onDrop("toothImage3") });

  const renderDropZoneCell = (
    dropzoneProps: ReturnType<typeof useDropzone>,
    imageSrc: string | null,
    rowSpan: number
  ) => (
    <td
      {...dropzoneProps.getRootProps()}
      style={{
        cursor: "pointer",
        border: "1px dashed grey",
        textAlign: "center",
      }}
      width={imgCellWidth}
      height={imgCellHeight}
      rowSpan={rowSpan}
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
            {renderDropZoneCell(dropzoneProps1, detail.skinImage1, 4)}
            {renderDropZoneCell(dropzoneProps2, detail.skinImage2, 4)}
            {renderDropZoneCell(dropzoneProps3, detail.skinImage3, 4)}
          </tr>
          <tr>
            <th>피모</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.hair}
                onChange={(e) => setDetail({ ...detail, hair: e.target.value })}
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
                value={detail.earRight}
                onChange={(e) =>
                  setDetail({ ...detail, earRight: e.target.value })
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
                value={detail.earLeft}
                onChange={(e) =>
                  setDetail({ ...detail, earLeft: e.target.value })
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
                value={detail.fluorescentRight}
                onChange={(e) =>
                  setDetail({ ...detail, fluorescentRight: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.fluorescentRightLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("fluorescentRightLevel", option)
                  }
                />
              </td>
            ))}
            {renderDropZoneCell(dropzoneProps4, detail.eyeImage1, 8)}
            {renderDropZoneCell(dropzoneProps5, detail.eyeImage2, 8)}
            {renderDropZoneCell(dropzoneProps6, detail.eyeImage3, 8)}
          </tr>
          <tr>
            <th>형광염색(좌)</th>
            <td>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.fluorescentLeft}
                onChange={(e) =>
                  setDetail({ ...detail, fluorescentLeft: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.fluorescentLeftLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("fluorescentLeftLevel", option)
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
                value={detail.tearRight}
                onChange={(e) =>
                  setDetail({ ...detail, tearRight: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.tearRightLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("tearRightLevel", option)
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
                value={detail.tearLeft}
                onChange={(e) =>
                  setDetail({ ...detail, tearLeft: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.tearLeftLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("tearLeftLevel", option)
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
                value={detail.eyePressureRight}
                onChange={(e) =>
                  setDetail({ ...detail, eyePressureRight: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.eyePressureRightLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("eyePressureRightLevel", option)
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
                value={detail.eyePressureLeft}
                onChange={(e) =>
                  setDetail({ ...detail, eyePressureLeft: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.eyePressureLeftLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("eyePressureLeftLevel", option)
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
                value={detail.slir}
                onChange={(e) => setDetail({ ...detail, slir: e.target.value })}
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.slirLevel === option}
                  onChange={() => handleSingleChoiceChange("slirLevel", option)}
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
                value={detail.appearance}
                onChange={(e) =>
                  setDetail({ ...detail, appearance: e.target.value })
                }
              />
            </td>
            {["낮음", "정상", "높음"].map((option, index) => (
              <td style={{ textAlign: "center" }} key={index}>
                <Checkbox
                  checked={detail.appearanceLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("appearanceLevel", option)
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
            {renderDropZoneCell(dropzoneProps7, detail.toothImage1, 5)}
            {renderDropZoneCell(dropzoneProps8, detail.toothImage2, 5)}
            {renderDropZoneCell(dropzoneProps9, detail.toothImage3, 5)}
          </tr>
          <tr>
            <th>치아결손</th>
            <td colSpan={4}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
                value={detail.toothLoss}
                onChange={(e) =>
                  setDetail({ ...detail, toothLoss: e.target.value })
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
                value={detail.brokenTooth}
                onChange={(e) =>
                  setDetail({ ...detail, brokenTooth: e.target.value })
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
                value={detail.brokenToothRemain}
                onChange={(e) =>
                  setDetail({ ...detail, brokenToothRemain: e.target.value })
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
                value={detail.tartar}
                onChange={(e) =>
                  setDetail({ ...detail, tartar: e.target.value })
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
