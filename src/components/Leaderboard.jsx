import React, { useEffect, useState } from "react";
import getData from "../services/getData";

const Leaderboard = () => {
  const [players, setPlayers] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSuccess = (data) => {
      setPlayers(
        Object.entries(data || {}).map(([key, value]) => ({
          id: key,
          ...value,
        }))
      );
      setLoading(false);
    };

    const handleError = (error) => {
      setError(error);
      setLoading(false);
    };

    const leaderboard = getData(handleSuccess, handleError);

    return () => leaderboard();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (players.length === 0) {
    return (
      <div className="">
        <h3 className="text-2xl p-2 mb-4">Leaderboard</h3>
        <p className="text-4xl text-main">
          Noch keine Daten. Spielen Sie ein Spiel, um der Erste zu sein!{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-main p-8 container-sm rounded-xl">
      <h3 className="text-2xl p-2 mb-4 text-second">Leaderboard</h3>
      <table className="w-full border-collapse text-se">
        <thead>
          <tr>
            <th className="border p-2 text-center">Platz</th>
            <th className="border p-2 text-center">Name</th>
            <th className="border p-2 text-center">Highscore</th>
          </tr>
        </thead>
        <tbody>
          {players

            .sort((a, b) => b.points - a.points)
            .slice(0, 5)
            .map((player, index) => (
              <tr key={player.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{player.username}</td>
                <td className="border p-2">{player.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
