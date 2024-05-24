import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id, name, breed, ownerName, age, sex, neutered, childBirth } =
    await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pet/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        breed: breed,
        parentName: ownerName,
        species: "강아지",
        age: age,
        gender: sex,
        isNeutered: neutered,
        hasGivenBirth: childBirth,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to register pet");
  }

  return data.json();
}
