import React from "react";
import Page from "./page";
import { fetchAllPets } from "@/service/admin";

const layout = async () => {
  const data = await fetchAllPets();

  return (
    <div>
      <Page data={data} />
    </div>
  );
};

export default layout;
