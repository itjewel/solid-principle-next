// lib/services/ProductService.ts
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  private repo: ProductRepository;

  constructor(repo: ProductRepository) {
    this.repo = repo;
  }

  async getProducts() {
    return this.repo.getAll();
  }

  async createProduct(product: { name: string; price: number }) {
    return this.repo.add(product);
  }

  async deleteProduct(id: number) {
    return this.repo.remove(id);
  }
}
