import { getAllProjects } from "@/lib/controller";
// import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = getAllProjects();
    return Response.json({ message: "derelicte", projects }, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Error", err }, { status: 500 });
  }
}
