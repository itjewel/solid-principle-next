// lib/repositories/ProductRepository.ts
export class ProductRepository {
  async getAll() {
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

  async remove(id: number) {
    return fetch(`/api/products?id=${id}`, { method: "DELETE" });
  }
}
