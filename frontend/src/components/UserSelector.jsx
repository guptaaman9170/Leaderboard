import { useState } from "react";
import { addUser } from "../api";

export default function UserSelector({ users, selectedUser, setSelectedUser, refresh }) {
  const [newUser, setNewUser] = useState("");

  const handleAdd = async () => {
    if (!newUser.trim()) return;
    await addUser(newUser.trim());
    setNewUser("");
    refresh();
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-3">
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="w-full md:w-1/2 border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
      >
        <option value="">— Select User —</option>
        {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
      </select>
      <div className="flex w-full md:w-1/2 gap-2">
        <input
          className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          placeholder="Add new user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAdd}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
          Add
        </button>
      </div>
    </div>
  );
}
