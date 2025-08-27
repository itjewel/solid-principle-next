import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Fake login (replace with DB check)
  if (email === "admin@gmail.com" && password === "123456") {
    return NextResponse.json({ token: "FAKE-JWT-TOKEN" });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
