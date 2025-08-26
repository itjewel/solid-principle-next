// lib/repositories/interfaces/IRemovableProductRepo.ts
export interface IRemovableProductRepo {
  remove(id: number): Promise<void>;
}
