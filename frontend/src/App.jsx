import { useEffect, useState } from "react";
import { fetchLeaderboard } from "./api";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const refresh = async () => setData(await fetchLeaderboard());

  useEffect(() => { refresh(); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6">
        Weekly Contribution Ranking 🏆
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-lg mb-8">
        <UserSelector
          users={data}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          refresh={refresh}
        />
        <ClaimButton selectedUser={selectedUser} refresh={refresh} />
      </div>

      <Leaderboard data={data} />
    </div>
  );
}
