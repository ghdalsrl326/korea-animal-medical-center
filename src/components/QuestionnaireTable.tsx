"use client";
import { settingAtom } from "@/app/data/settingStore";
import { Input, Space } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import Title from "antd/es/typography/Title";
import { useAtom } from "jotai";
import React, { useState } from "react";

const QuestionnaireTable = () => {
  const [setting] = useAtom(settingAtom);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "200px",
      }}
    >
      <table style={{ width: "100%", height: "90%" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#E6A2A7",
              color: "#fff",
            }}
          >
            <th>보호자 성함</th>
            <th>동물이름</th>
            <th>품종</th>
            <th>성별</th>
            <th>중성화 유무</th>
            <th>
              출산유무 <br />
              (암컷만 해당)
            </th>
          </tr>
          <tr
            style={{
              backgroundColor: "#F9EDED",
              color: "#46162F",
              borderBottom: "3px solid #E6A2A7",
            }}
          >
            <th>{setting.ownerName}</th>
            <th>{setting.name}</th>
            <th>{setting.breed}</th>
            <th>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
                autoFocus
              />
            </th>
            <th>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </th>
            <th>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center" }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>건강검진 해본적이 있나요?</td>
            <td>
              <Checkbox /> 없음
            </td>
            <td>
              <Checkbox /> 최근 6개월 이내
            </td>
            <td>
              <Checkbox /> 최근 1-2년 이내
            </td>
            <td>
              <Checkbox /> 2년 이상 경과
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>진단된 병명이 있나요?</td>
            <td>
              <Checkbox /> 없음
            </td>
            <td colSpan={4}>
              <Checkbox /> 있음 (진단명:
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              ) <br />
              언제 진단 되었나요? (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
              />
              ) 관리중인가요? (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>복용중인 처방약이 있나요?</td>
            <td>
              <Checkbox /> 없음
            </td>
            <td colSpan={4}>
              <Checkbox /> 있음 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>수술이력이 있나요?</td>
            <td>
              <Checkbox /> 없음
            </td>
            <td colSpan={4}>
              <Checkbox /> 있음 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>주사나 약 부작용이 있나요?</td>
            <td>
              <Checkbox /> 없음
            </td>
            <td colSpan={4}>
              <Checkbox /> 있음 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>동거중인 다른 동물이 있나요?</td>
            <td>
              <Checkbox /> 없음
            </td>
            <td colSpan={4}>
              <Checkbox /> 있음 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>
              호흡기 증상이 있나요? <br />
              (복수 선택 가능)
            </td>
            <td>
              <Checkbox /> 없음
            </td>
            <td>
              <Checkbox /> 재채기
            </td>
            <td>
              <Checkbox /> 맑은콧물
            </td>
            <td>
              <Checkbox /> 농성콧물
            </td>
            <td>
              <Checkbox /> 기침
            </td>
          </tr>
          <tr>
            <td>산책은 얼마나 하나요?</td>
            <td colSpan={5}>
              산책횟수 1주일에 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
              />
              )번 산책시간 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>예방접종을 하고 있나요?</td>
            <td>예방접종주사</td>
            <td>
              <Checkbox /> 한적없음
            </td>
            <td>
              <Checkbox /> 어렸을 때만
            </td>
            <td>
              <Checkbox /> 간혹
            </td>
            <td>
              <Checkbox /> 매년
            </td>
          </tr>
          <tr>
            <td>심장사상충</td>
            <td>
              <Checkbox /> 한적없음
            </td>
            <td>
              <Checkbox /> 간혹
            </td>
            <td>
              <Checkbox /> 여름에만
            </td>
            <td>
              <Checkbox /> 매달
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "3px solid #E6A2A7",
            }}
          >
            <td>외부기생충</td>
            <td>
              <Checkbox /> 한적없음
            </td>
            <td>
              <Checkbox /> 간혹
            </td>
            <td>
              <Checkbox /> 여름에만
            </td>
            <td>
              <Checkbox /> 매달
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>물은 어느정도 마시나요?</td>
            <td style={{ width: "15%" }}>
              <Checkbox /> 잘 안마시는 편
            </td>
            <td>
              <Checkbox /> 잘 마시는 편
            </td>
            <td>
              <Checkbox /> 많이 마시는 편
            </td>
            <td>
              <Checkbox /> 강제로 추가음수중
            </td>
            <td>
              <Checkbox /> 피하수액중
            </td>
          </tr>
          <tr>
            <td colSpan={5}>
              대략 하루에 종이컵 기준 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
              />
              )컵
            </td>
          </tr>
          <tr>
            <td>식욕은 어떤가요?</td>
            <td>
              <Checkbox /> 원래 입이 짧음
            </td>
            <td>
              <Checkbox /> 보통
            </td>
            <td>
              <Checkbox /> 식탐 있는 편
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>식욕의 변화가 있나요?</td>
            <td>
              <Checkbox /> 변화없음
            </td>
            <td>
              <Checkbox /> 최근 줄었음
            </td>
            <td>
              <Checkbox /> 최근 늘었음
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td rowSpan={3}>사료 종류/급여량을 알려주세요</td>
            <td>
              <Checkbox /> 건식
            </td>
            <td>
              <Checkbox /> 습식
            </td>
            <td>
              <Checkbox /> 반습식
            </td>
            <td>
              <Checkbox /> 화식
            </td>
            <td>
              <Checkbox /> 생식
            </td>
          </tr>
          <tr>
            <td>
              <Checkbox /> 자율급식
            </td>
            <td>
              <Checkbox /> 제한 급식 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "50%" }}
              />
              )
            </td>
            <td>
              <Checkbox /> 강제 급여 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "50%" }}
              />
              )
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2}>
              사료이름 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "50%" }}
              />
              )
            </td>
            <td colSpan={3}>
              하루주는양/종이컵기준 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "50%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>간식 종류/급여량을 알려주세요</td>
            <td colSpan={5}>
              <Checkbox /> 간식 종류 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>
              <Checkbox /> 2주 이상에 한 번
            </td>
            <td>
              <Checkbox /> 1주에 2-3번
            </td>
            <td colSpan={3}>
              <Checkbox /> 매일
            </td>
          </tr>
          <tr>
            <td>영양제를 먹고 있나요?</td>
            <td colSpan={5}>
              <Checkbox /> 영양제 이름 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
              />
              )
            </td>
          </tr>
          <tr>
            <td>구토를 하는 편인가요?</td>
            <td>
              <Checkbox /> 거의 안함
            </td>
            <td>
              <Checkbox /> 1달에 1~2회
            </td>
            <td>
              <Checkbox /> 1-2주에 1회
            </td>
            <td colSpan={2}>
              <Checkbox /> 2-3일에 한 번
            </td>
          </tr>
          <tr>
            <td>양치를 하고 있나요?</td>
            <td>
              <Checkbox /> 거의 안함
            </td>
            <td>
              <Checkbox /> 1달에 1~2회
            </td>
            <td>
              <Checkbox /> 1-2주에 3번 이내
            </td>
            <td colSpan={2}>
              <Checkbox /> 매일
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>소변은 어떤가요?</td>
            <td>배뇨양상:</td>
            <td>
              <Checkbox /> 묽은 편
            </td>
            <td>
              <Checkbox /> 정상
            </td>
            <td>
              <Checkbox /> 진한 편
            </td>
            <td>
              <Checkbox /> 간혹 혈뇨
            </td>
          </tr>
          <tr>
            <td>배뇨횟수:</td>
            <td>
              <Checkbox /> 1일 1-2회
            </td>
            <td>
              <Checkbox /> 1일 3-4회
            </td>
            <td>
              <Checkbox /> 1일 5회 이상
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td rowSpan={2}>배변 양상 / 횟수를 알려주세요</td>
            <td>
              <Checkbox />
              묽은 편
            </td>
            <td>
              <Checkbox /> 가끔 점액변
            </td>
            <td>
              <Checkbox /> 정상변
            </td>
            <td>
              <Checkbox /> 딱딱한 변
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <Checkbox /> 1일 3회 이상
            </td>
            <td>
              <Checkbox /> 1일 1-2회
            </td>
            <td>
              <Checkbox /> 2일 1회
            </td>
            <td>
              <Checkbox /> 3-4일 1회
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>혈액형 검사 시 추가비용 6만원 발생합니다</td>
            <td>
              <Checkbox /> 검사를 원합니다
            </td>
            <td>
              <Checkbox /> 검사를 원치 않습니다
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>검진 시 특히 자세히 보고 싶은 부분이 있다면 적어주세요</td>
            <td colSpan={5}>
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "100%" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuestionnaireTable;
