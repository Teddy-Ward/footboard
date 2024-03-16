import React, { useState, useEffect } from "react";
import fetchTeamData from "utils/fetchTeamData";
import TeamCard from "components/teams/TeamCard";

interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

const Main: React.FC = () => {
  const [data, setData] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetchTeamData()
      .then((data) => {
        setData(data.teams);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in Main component:", error);
        setError("Error fetching data, please try again");
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="main-content">
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="team-card-container">
          {data.map((team) => (
            <TeamCard key={team.idTeam} team={team} /> // Pass the team data as a prop
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
