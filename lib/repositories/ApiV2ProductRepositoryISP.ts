import { IReadableProductRepo } from "./interfaces/IReadableProductRepo";
import { IWritableProductRepo } from "./interfaces/IWritableProductRepo";
import { IRemovableProductRepo } from "./interfaces/IRemovableProductRepo";

export class ApiV2ProductRepositoryISP
  implements IReadableProductRepo, IWritableProductRepo, IRemovableProductRepo
{
  async getAll() {
    const res = await fetch("/api/v2/products", { cache: "no-store" });
    return res.json();
  }

  async add(product: { name: string; price: number }) {
    const res = await fetch("/api/v2/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return res.json();
  }

  async remove(id: number) {
    const res = await fetch(`/api/v2/products/${id}`, { method: "DELETE" });
    return res.json();
  }
}
