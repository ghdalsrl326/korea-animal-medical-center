import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req: Request) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/cover");
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
