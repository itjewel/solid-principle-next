// app/api/products/route.ts
import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

// GET
export async function GET() {
  return NextResponse.json(products);
}

// POST
export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = { id: Date.now(), ...body };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

// DELETE
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  products = products.filter((p) => p.id !== id);
  return NextResponse.json({ message: "Deleted" });
}
