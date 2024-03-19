import React, { useState, useEffect } from "react";
import fetchSquadData from "utils/fetchSquadData";
import PlayerModal from "./PlayerModal";
import PlayerList from "./PlayerList";
import { Player } from "./PlayerTypes";

interface TeamSquadProps {
  teamName: string;
  teamBadge: string;
  onUpdateSelectedPlayers: (selectedPlayers: Player[]) => void;
}

const TeamSquad: React.FC<TeamSquadProps> = ({
  teamBadge,
  teamName,
  onUpdateSelectedPlayers,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [shouldClearTeam, setShouldClearTeam] = useState(false);

  const [manager, setManager] = useState<Player | null>(null);
  const [goalkeepers, setGoalkeepers] = useState<Player[]>([]);
  const [defenders, setDefenders] = useState<Player[]>([]);
  const [midfielders, setMidfielders] = useState<Player[]>([]);
  const [forwards, setForwards] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSquadData(teamName);

        if (data.players) {
          const manager = data.players.find(
            (player) => player.strPosition === "Manager"
          );
          const goalkeepers = data.players.filter(
            (player) => player.strPosition === "Goalkeeper"
          );
          const defenders = data.players.filter(
            (player) =>
              player.strPosition === "Left-Back" ||
              player.strPosition === "Right-Back" ||
              player.strPosition === "Centre-Back" ||
              player.strPosition === "Defender"
          );
          const midfielders = data.players.filter(
            (player) =>
              player.strPosition === "Defensive Midfield" ||
              player.strPosition === "Central Midfield" ||
              player.strPosition === "Attacking Midfield" ||
              player.strPosition === "Right Midfield" ||
              player.strPosition === "Left Midfield"
          );
          const forwards = data.players.filter(
            (player) =>
              player.strPosition === "Left Wing" ||
              player.strPosition === "Right Winger" ||
              player.strPosition === "Centre-Forward" ||
              player.strPosition === "Forward"
          );
          setGoalkeepers(goalkeepers);
          setDefenders(defenders);
          setMidfielders(midfielders);
          setForwards(forwards);
          if (manager) {
            setManager(manager || null);
          } else {
            console.log("No manager found in the data.");
          }
        }
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

  const handlePlayerSelectionChange = (player: Player) => {
    setSelectedPlayers((prevPlayers) => {
      if (prevPlayers.includes(player)) {
        return prevPlayers.filter((p) => p !== player);
      } else if (prevPlayers.length < 11) {
        return [...prevPlayers, player];
      } else {
        return prevPlayers;
      }
    });
    onUpdateSelectedPlayers(selectedPlayers);
  };

  useEffect(() => {
    console.log("Selected Players:", selectedPlayers);
    onUpdateSelectedPlayers(selectedPlayers);
    if (shouldClearTeam) {
      setSelectedPlayers([]);
      setShouldClearTeam(false);
    }
  }, [selectedPlayers, shouldClearTeam, onUpdateSelectedPlayers]);
  return (
    <div>
      <h2>Squad for {teamName}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : goalkeepers ? (
        <>
          {manager && <p>Manager: {manager.strPlayer}</p>}
          {goalkeepers && (
            <PlayerList
              title="Goalkeepers"
              players={goalkeepers}
              selectedPlayers={selectedPlayers}
              onPlayerSelectionChange={handlePlayerSelectionChange}
              handleShow={handleShow}
            />
          )}
          {defenders && (
            <PlayerList
              title="Defenders"
              players={defenders}
              selectedPlayers={selectedPlayers}
              onPlayerSelectionChange={handlePlayerSelectionChange}
              handleShow={handleShow}
            />
          )}
          {midfielders && (
            <PlayerList
              title="Midfielders"
              players={midfielders}
              selectedPlayers={selectedPlayers}
              onPlayerSelectionChange={handlePlayerSelectionChange}
              handleShow={handleShow}
            />
          )}
          {forwards && (
            <PlayerList
              title="Forwards"
              players={forwards}
              selectedPlayers={selectedPlayers}
              onPlayerSelectionChange={handlePlayerSelectionChange}
              handleShow={handleShow}
            />
          )}
          <button onClick={() => setShouldClearTeam(true)}>
            Clear Selected Team
          </button>
        </>
      ) : (
        <p>No squad data found.</p>
      )}

      <PlayerModal
        show={showPlayerModal}
        onClose={handleClose}
        player={selectedPlayer!}
      />
    </div>
  );
};

export default TeamSquad;
