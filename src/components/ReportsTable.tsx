"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Link from "next/link";
import { URL } from "@/app/data/url";
import { useAtom } from "jotai";
import { configAtom } from "@/app/data/configStore";
import { ResGetAdminView } from "@/types/Admin";
import { EyeTwoTone, DeleteTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";
import { ResGetMyInfo } from "@/types/Doctor";
import { deleteQuestionnaire } from "@/service/adminClient";
import { useRouter } from "next/navigation";
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
  myInfo: ResGetMyInfo;
};

const ReportsTable = ({ data: fetchedData, myInfo }: Props) => {
  const router = useRouter();
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
      width: "120px",
      sorter: (a, b) => a.reportId.localeCompare(b.reportId),
      filters: Array.from(
        new Set(data.map((item) => item.reportId)).values()
      ).map((reportId) => ({ text: reportId, value: reportId })),
      onFilter: (value, record) => record.reportId.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "환자명",
      dataIndex: "petName",
      width: "150px",
      sorter: (a, b) => a.petName.localeCompare(b.petName),
      filters: Array.from(
        new Set(data.map((item) => item.petName)).values()
      ).map((petName) => ({ text: petName, value: petName })),
      onFilter: (value, record) => record.petName.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "환자 ID",
      dataIndex: "petId",
      width: "150px",
      sorter: (a, b) => a.petId.localeCompare(b.petId),
      filters: Array.from(new Set(data.map((item) => item.petId))).map(
        (petId) => ({ text: petId, value: petId })
      ),
      onFilter: (value, record) => record.petId.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "CREATED",
      dataIndex: "created",
      width: "150px",
      sorter: (a, b) =>
        new Date(a.created).getTime() - new Date(b.created).getTime(),
      filters: Array.from(
        new Set(data.map((item) => item.created)).values()
      ).map((created) => ({ text: created, value: created })),
      onFilter: (value, record) => record.created.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "TYPE",
      dataIndex: "petType",
      width: "150px",
      sorter: (a, b) => a.petType.localeCompare(b.petType),
      filters: Array.from(
        new Set(data.map((item) => item.petType)).values()
      ).map((petType) => ({ text: petType, value: petType })),
      onFilter: (value, record) => record.petType.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "담당의",
      dataIndex: "doctor",
      width: "150px",
      sorter: (a, b) => a.doctor.localeCompare(b.doctor),
      filters: Array.from(
        new Set(data.map((item) => item.doctor)).values()
      ).map((doctor) => ({ text: doctor, value: doctor })),
      onFilter: (value, record) => record.doctor.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "보호자",
      dataIndex: "owner",
      width: "150px",
      sorter: (a, b) => a.owner.localeCompare(b.owner),
      filters: Array.from(new Set(data.map((item) => item.owner)).values()).map(
        (owner) => ({ text: owner, value: owner })
      ),
      onFilter: (value, record) => record.owner.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "조회",
      key: "view",
      width: "70px",
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
          href={`${URL.PET}/${record.petId}${URL.QUESTIONNAIRE}/${record.reportId}${URL.COVER}`}
        >
          <EyeTwoTone style={{ fontSize: "18px" }} />
        </Link>
      ),
    },
    {
      title: "삭제",
      key: "delete",
      width: "70px",
      onCell: (record) => ({
        style: { cursor: "pointer" },
        onClick: async () => {
          await deleteQuestionnaire(record.reportId);
          router.refresh();
        },
      }),
      render: (_, record) => <DeleteTwoTone style={{ fontSize: "18px" }} />,
    },
  ];

  return (
    <div>
      <Table
        className="antd-table"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        size="small"
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
};

export default ReportsTable;
