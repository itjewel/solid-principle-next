// lib/repositories/interfaces/IWritableProductRepo.ts
export interface IWritableProductRepo {
  add(product: { name: string; price: number }): Promise<void>;
}
