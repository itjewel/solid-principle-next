export interface IAuthRepository {
  login(email: string, password: string): Promise<{ token: string }>;
}

export class AuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<{ token: string }> {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Invalid credentials");
    }

    return res.json(); // { token: "JWT-TOKEN" }
  }
}
