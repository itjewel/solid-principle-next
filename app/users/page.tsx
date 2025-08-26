// app/users/page.tsx
"use client";
import { useEffect, useState } from "react";
import { UserService } from "@/lib/services/UserService";
import { UserRepository } from "@/lib/repositories/UserRepository";
interface UsersProps {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<UsersProps[]>([]);
  const userService = new UserService(new UserRepository());

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  const addUser = async () => {
    await userService.createUser({ name: "New User", email: "new@test.com" });
    setUsers(await userService.getUsers());
  };

  const deleteUser = async (id: number) => {
    await userService.deleteUser(id);
    setUsers(await userService.getUsers());
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => deleteUser(u.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
