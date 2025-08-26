// lib/repositories/UserRepository.ts
export class UserRepository {
  async getAll() {
    const res = await fetch("/api/users", { cache: "no-store" });
    return res.json();
  }

  async add(user: { name: string; email: string }) {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  }

  async remove(id: number) {
    return fetch(`/api/users?id=${id}`, { method: "DELETE" });
  }
}
