import React, { useEffect, useState } from "react";

export default function LeetCodeProgress() {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/swarna73")
      .then((res) => res.json())
      .then((data) => {
        setLeetcodeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch LeetCode data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading LeetCode stats...</p>;

  if (!leetcodeData) return <p className="text-center text-red-500">Failed to load LeetCode stats.</p>;

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">LeetCode Progress</h2>
      <p className="mb-2">Total Solved: {leetcodeData.totalSolved}</p>
      <div className="w-full max-w-xl mx-auto bg-gray-700 rounded-full h-2.5 mb-4">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${(leetcodeData.totalSolved / 2500) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-center gap-4 text-sm">
        <div>Easy: {leetcodeData.easySolved}</div>
        <div>Medium: {leetcodeData.mediumSolved}</div>
        <div>Hard: {leetcodeData.hardSolved}</div>
      </div>
    </div>
  );
}
