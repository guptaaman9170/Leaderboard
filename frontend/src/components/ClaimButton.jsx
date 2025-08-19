import { useState } from "react";
import { claimPoints } from "../api";

export default function ClaimButton({ selectedUser, refresh }) {
  const [showModal, setShowModal] = useState(false);
  const [claimedData, setClaimedData] = useState(null);

  const onClaim = async () => {
    if (!selectedUser) return alert("Please select a user first");
    const res = await claimPoints(selectedUser);
    setClaimedData(res);
    setShowModal(true);
    refresh();
  };

  return (
    <>
      <button
        onClick={onClaim}
        disabled={!selectedUser}
        className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition disabled:opacity-50"
      >
        🎁 Claim Points
      </button>

      {/* Popup Modal */}
      {showModal && claimedData && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
    <div className="bg-white p-6 rounded-2xl shadow-2xl transform scale-105 text-center max-w-sm w-full">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        🎉 Congratulations!
      </h2>
      <p className="text-lg text-gray-700">
        {claimedData.user.name} earned{" "}
        <span className="font-bold text-orange-500">
          {claimedData.randomPoints}
        </span>{" "}
        points!
      </p>
      <button
        onClick={() => setShowModal(false)}
        className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  );
}
