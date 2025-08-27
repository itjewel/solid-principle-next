import { IAuthRepository } from "../repositories/AuthRepository";

export class AuthService {
  private repo: IAuthRepository;

  constructor(repo: IAuthRepository) {
    this.repo = repo;
  }

  async login(email: string, password: string) {
    return this.repo.login(email, password);
  }
}
