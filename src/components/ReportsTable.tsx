"use client";
import React from "react";
import { Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import { URL } from "@/app/data/url";
import { useAtom } from "jotai";
import { configAtom } from "@/app/data/configStore";

interface DataType {
  key: React.Key;
  reportId: string;
  petName: string;
  petId: string;
  created: string;
  petType: string;
  doctor: string;
  owner: string;
}

const data: DataType[] = [
  {
    key: "1",
    reportId: "A100",
    petName: "사랑이",
    petId: "001",
    created: "2021-11-01",
    petType: "강아지",
    doctor: "김철수",
    owner: "박민수",
  },
  {
    key: "2",
    reportId: "A101",
    petName: "초코",
    petId: "002",
    created: "2021-10-05",
    petType: "고양이",
    doctor: "이영희",
    owner: "김영희",
  },
  {
    key: "3",
    reportId: "A102",
    petName: "미미",
    petId: "003",
    created: "2021-09-15",
    petType: "강아지",
    doctor: "박지수",
    owner: "이준호",
  },
  {
    key: "4",
    reportId: "A103",
    petName: "몽이",
    petId: "004",
    created: "2021-08-20",
    petType: "강아지",
    doctor: "정다연",
    owner: "최민정",
  },
  {
    key: "5",
    reportId: "A104",
    petName: "나비",
    petId: "005",
    created: "2021-07-30",
    petType: "고양이",
    doctor: "한지민",
    owner: "김성현",
  },
  {
    key: "6",
    reportId: "A105",
    petName: "깜찍이",
    petId: "006",
    created: "2021-06-25",
    petType: "고양이",
    doctor: "오수진",
    owner: "박서준",
  },
  {
    key: "7",
    reportId: "A106",
    petName: "뚱이",
    petId: "007",
    created: "2021-05-14",
    petType: "강아지",
    doctor: "최준혁",
    owner: "이예은",
  },
  {
    key: "8",
    reportId: "A107",
    petName: "하늘",
    petId: "008",
    created: "2021-04-10",
    petType: "강아지",
    doctor: "김지훈",
    owner: "유진아",
  },
  {
    key: "9",
    reportId: "A108",
    petName: "별이",
    petId: "009",
    created: "2021-03-22",
    petType: "고양이",
    doctor: "박성민",
    owner: "장서연",
  },
  {
    key: "10",
    reportId: "A109",
    petName: "코코",
    petId: "010",
    created: "2021-02-18",
    petType: "강아지",
    doctor: "이현수",
    owner: "윤정훈",
  },
  {
    key: "11",
    reportId: "A110",
    petName: "보리",
    petId: "011",
    created: "2021-01-12",
    petType: "강아지",
    doctor: "김민재",
    owner: "오하나",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ReportsTable = () => {
  const [config, setConfig] = useAtom(configAtom);

  const columns: TableColumnsType<DataType> = [
    {
      title: "리포트 ID",
      dataIndex: "reportId",
      width: "150px",
      sorter: (a, b) => a.reportId.localeCompare(b.reportId),
    },
    {
      title: "환자명",
      dataIndex: "petName",
      width: "150px",
      sorter: (a, b) => a.petName.localeCompare(b.petName),
    },
    {
      title: "환자 ID",
      dataIndex: "petId",
      width: "150px",
      sorter: (a, b) => a.petId.localeCompare(b.petId),
    },
    {
      title: "CREATED",
      dataIndex: "created",
      width: "150px",
      sorter: (a, b) =>
        new Date(a.created).getTime() - new Date(b.created).getTime(),
    },
    {
      title: "TYPE",
      dataIndex: "petType",
      width: "150px",
      sorter: (a, b) => a.petType.localeCompare(b.petType),
    },
    {
      title: "담당의",
      dataIndex: "doctor",
      width: "150px",
      sorter: (a, b) => a.doctor.localeCompare(b.doctor),
    },
    {
      title: "보호자",
      dataIndex: "owner",
      width: "150px",
      sorter: (a, b) => a.owner.localeCompare(b.owner),
    },
    {
      title: "Action",
      key: "action",
      onCell: (record) => ({
        style: { cursor: "pointer" },
        onClick: () => {
          setConfig((prev) => ({
            ...prev,
            petId: record.petId,
            date: record.created,
          }));
        },
      }),
      render: (_, record) => (
        <Link
          href={`${URL.REPORT}/${record.petId}/${record.created}/${URL.SETTING}`}
        >
          조회
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        size="small"
        bordered
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
};

export default ReportsTable;
