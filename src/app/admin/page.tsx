import React from "react";
import ClientAdminPage from "./ClientPage";
import { fetchAllPets } from "@/service/admin";

const page = async () => {
  const data = await fetchAllPets();

  return (
    <div>
      <ClientAdminPage data={data} />
    </div>
  );
};

export default page;
