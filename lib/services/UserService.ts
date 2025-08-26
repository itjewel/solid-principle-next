// lib/services/UserService.ts
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  private repo: UserRepository;

  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  async getUsers() {
    return this.repo.getAll();
  }

  async createUser(user: { name: string; email: string }) {
    return this.repo.add(user);
  }

  async deleteUser(id: number) {
    return this.repo.remove(id);
  }
}
