// lib/repositories/interfaces/IReadableProductRepo.ts
export interface IReadableProductRepo {
  getAll(): Promise<{ id: number; name: string; price: number }[]>;
}
