import { getAllProjects } from "@/lib/controller";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const projects = getAllProjects();
    return NextResponse.json(
      { message: "derelicte", projects },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
