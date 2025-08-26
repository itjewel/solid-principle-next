// app/api/users/route.ts
import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Jewel", email: "jewel@test.com" },
  { id: 2, name: "Nizuel", email: "nizuel@test.com" },
];

// GET
export async function GET() {
  return NextResponse.json(users);
}

// POST
export async function POST(req: Request) {
  const body = await req.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// DELETE
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  users = users.filter((u) => u.id !== id);
  return NextResponse.json({ message: "Deleted" });
}
