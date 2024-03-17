import React, { useState, useEffect } from "react";
import fetchSquadData from "utils/fetchSquadData";

interface TeamSquadProps {
  teamName: string;
  teamId: string;
}

interface Player {
  idPlayer: string;
  strNationality: string;
  strPlayer: string;
  strPlayerAlternate: string;
  strTeam: string;
  strTeam2: string;
  dateBorn: string;
  strNumber: string;
  strSigning: string;
  strWage: string;
  strStatus: string;
  strDescriptionEN: string;
  strSide: string;
  strPosition: string;
  strHeight: string;
  strWeight: string;
  strCutout: string;
}

const TeamSquad: React.FC<TeamSquadProps> = ({ teamId, teamName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [squadData, setSquadData] = useState<{ players: Player[] } | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSquadData(teamName);
        setSquadData(data);
      } catch (error) {
        console.error("Error fetching squad data:", error);
        setError("Error fetching squad data, please try again");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [teamName]);

  return (
    <div>
      <h2>Squad for {teamName}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : squadData?.players ? (
        <ul>
          {squadData.players.map((player) => (
            <li key={player.idPlayer}>
              {player.strPlayer} - #{player.strNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>No squad data found.</p>
      )}
    </div>
  );
};

export default TeamSquad;
