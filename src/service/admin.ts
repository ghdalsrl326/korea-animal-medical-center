import { cookies } from "next/headers";

export async function fetchAllPets() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/view`,
    {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch pets");
  }

  return data;
}
