import React from "react";
import { fetchAllPets } from "@/service/adminServer";
import { DataProvider } from "@/app/contexts/DataContext";

interface Props {
  children: React.ReactNode;
}

const layout = async ({ children }: Props) => {
  const data = await fetchAllPets();

  return (
    <div>
      <DataProvider data={data}>
        <div>{children}</div>
      </DataProvider>
    </div>
  );
};

export default layout;
