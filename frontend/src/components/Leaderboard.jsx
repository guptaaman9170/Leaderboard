import { Trophy, Crown } from "lucide-react";

export default function Leaderboard({ data }) {
  const top = data.slice(0, 3);
  const rest = data.slice(3);

  const bands = {
    1: "from-yellow-400 to-yellow-600", // 1st
    2: "from-gray-300 to-gray-500",     // 2nd
    3: "from-orange-300 to-orange-500", // 3rd
  };

  // Reorder podium as 2nd - 1st - 3rd
  const podiumOrder = [top[1], top[0], top[2]].filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Podium */}
      <div className="flex justify-center items-end gap-6 mb-12">
        {podiumOrder.map((u) => (
          <div
            key={u._id}
            className={`relative flex flex-col items-center bg-gradient-to-b ${
              bands[u.rank] || "from-gray-200 to-gray-400"
            } p-4 rounded-xl shadow-xl transition transform hover:scale-105 ${
              u.rank === 1 ? "w-32 md:w-48 scale-110 z-10" : "w-24 md:w-36"
            }`}
          >

            {/* Profile circle with trophy */}
            <div
              className={`rounded-full bg-white flex items-center justify-center shadow-lg mb-2 ${
                u.rank === 1 ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-20 md:h-20"
              }`}
            >
              <Trophy
                className={`${
                  u.rank === 1 ? "w-10 h-10 text-yellow-500" : "w-8 h-8 text-gray-700"
                }`}
              />
            </div>

            {/* User name */}
            <p className="font-extrabold text-white text-center drop-shadow-md text-lg md:text-xl">
              {u.name}
            </p>

            {/* Points */}
            <p className="text-sm md:text-base text-white opacity-90">
              {u.totalPoints} pts
            </p>

            {/* Rank number */}
            <span className="text-lg font-extrabold text-white mt-2">
              #{u.rank}
            </span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-orange-100">
            <tr>
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((u) => (
              <tr key={u._id} className="border-t hover:bg-orange-50 transition">
                <td className="py-2 px-4 font-bold">#{u.rank}</td>
                <td className="py-2 px-4">{u.name}</td>
                <td className="py-2 px-4">{u.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
