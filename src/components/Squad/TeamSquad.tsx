import React, { useState, useEffect } from "react";
import fetchSquadData from "utils/fetchSquadData";
import PlayerModal from "./PlayerModal";
import { Player } from "./PlayerTypes";

interface TeamSquadProps {
  teamName: string;
  teamBadge: string;
}

const TeamSquad: React.FC<TeamSquadProps> = ({ teamBadge, teamName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [squadData, setSquadData] = useState<{ players: Player[] } | null>(
    null
  );
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

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

  const handleClose = () => setShowPlayerModal(false);
  const handleShow = (player: Player) => {
    setSelectedPlayer(player);
    setShowPlayerModal(true);
  };

  
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
              {player.strPlayer} - #{player.strNumber}{" "}
              <button
                className="info-button"
                onClick={() => handleShow(player)}
              >
                ?
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No squad data found.</p>
      )}

      <PlayerModal
        show={showPlayerModal}
        onClose={handleClose}
        player={selectedPlayer!} // Ensure selectedPlayer exists
      />
    </div>
  );
};

export default TeamSquad;
