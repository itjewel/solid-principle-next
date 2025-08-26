// lib/repositories/ProductRepository.ts
import { IReadableProductRepo } from "./interfaces/IReadableProductRepo";
import { IWritableProductRepo } from "./interfaces/IWritableProductRepo";
import { IRemovableProductRepo } from "./interfaces/IRemovableProductRepo";

export class ProductRepository
  implements IReadableProductRepo, IWritableProductRepo, IRemovableProductRepo
{
  private products: { id: number; name: string; price: number }[] = [];

  async getAll() {
    return this.products;
  }

  async add(product: { name: string; price: number }) {
    const id = this.products.length + 1;
    this.products.push({ id, ...product });
  }

  async remove(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
  }
}
