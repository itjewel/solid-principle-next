// lib/repositories/ProductRepository.ts
import { ProductRepository } from "./ProductRepository";
export class Api2ProductRepository extends ProductRepository {
  async getAll() {
    // নতুন API URL
    const res = await fetch("/api/products", { cache: "no-store" });
    return res.json();
  }

  async add(product: { name: string; price: number }) {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return res.json();
  }

  // remove() inherited from ProductRepository (লিখতে হবে না)
}
