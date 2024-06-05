"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import { URL } from "@/app/data/url";
import { useAtom } from "jotai";
import { configAtom } from "@/app/data/configStore";
import { ResGetAdminView } from "@/types/Admin";
import dayjs from "dayjs";
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

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

type Props = {
  data: ResGetAdminView;
};

const ReportsTable = ({ data: fetchedData }: Props) => {
  const [config, setConfig] = useAtom(configAtom);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const transformedData = fetchedData.map((item) => ({
      key: item.id.toString(),
      reportId: item.id.toString(),
      petName: item.pet.name,
      petId: item.pet.id.toString(),
      created: dayjs(item.createdAt).format("YY.MM.DD HH:mm:ss"),
      petType: "강아지",
      doctor: item.pet.doctor.name,
      owner: item.pet.parentName,
    }));
    setData(transformedData);
  }, [fetchedData]);

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
          href={`${URL.PET}/${record.petId}${URL.QUESTIONNAIRE}/${record.reportId}`}
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
