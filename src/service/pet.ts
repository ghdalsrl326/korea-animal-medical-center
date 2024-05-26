import { settingType } from "@/app/data/settingStore";
import { cookies } from "next/headers";

export async function fetchReports(petID: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pet/questionnaire?petID=${petID}`,
    {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch report list");
  }

  return data;
}

export async function registPet(setting: settingType) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pet/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: setting.id,
        name: setting.name,
        breed: setting.breed,
        parentName: setting.ownerName,
        species: "강아지",
        age: setting.age,
        gender: setting.sex,
        isNeutered: setting.neutered,
        hasGivenBirth: setting.childBirth,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to register pet");
  }

  return data;
}

export async function updatePet(setting: settingType) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: setting.id,
      name: setting.name,
      breed: setting.breed,
      parentName: setting.ownerName,
      species: "강아지",
      age: setting.age,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update pet");
  }

  return data;
}
