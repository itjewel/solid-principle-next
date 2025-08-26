// lib/services/ProductService.ts
import { IReadableProductRepo } from "../repositories/interfaces/IReadableProductRepo";
import { IWritableProductRepo } from "../repositories/interfaces/IWritableProductRepo";
import { IRemovableProductRepo } from "../repositories/interfaces/IRemovableProductRepo";

export class ProductServiceISP {
  private readRepo: IReadableProductRepo;
  private writeRepo: IWritableProductRepo;
  private removeRepo: IRemovableProductRepo;

  constructor(
    readRepo: IReadableProductRepo,
    writeRepo: IWritableProductRepo,
    removeRepo: IRemovableProductRepo
  ) {
    this.readRepo = readRepo;
    this.writeRepo = writeRepo;
    this.removeRepo = removeRepo;
  }

  async getProducts() {
    return this.readRepo.getAll();
  }

  async createProduct(product: { name: string; price: number }) {
    return this.writeRepo.add(product);
  }

  async deleteProduct(id: number) {
    return this.removeRepo.remove(id);
  }
}
