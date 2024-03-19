import React from "react";
import { Player } from "./PlayerTypes";

interface PlayerListProps {
  title: string;
  players: Player[];
  selectedPlayers: Player[];
  onPlayerSelectionChange: (player: Player) => void;
  handleShow: (player: Player) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({
  title,
  players,
  selectedPlayers,
  onPlayerSelectionChange,
  handleShow,
}) => {
  return (
    <>
      <h3>{title}</h3>
      
      <ul>
        {players
          .sort((a, b) => {
            const numA = a.strNumber ? parseInt(a.strNumber, 10) : Infinity;
            const numB = b.strNumber ? parseInt(b.strNumber, 10) : Infinity;
            return numA - numB;
          })
          .map((player) => (
            <li key={player.idPlayer}>
              <input
                type="checkbox"
                checked={selectedPlayers.includes(player)}
                onChange={() => onPlayerSelectionChange(player)}
              />
              <label htmlFor={player.idPlayer}>
                #{player.strNumber} - {player.strPlayer}{" "}
                <button
                  className="info-button"
                  onClick={() => handleShow(player)}
                >
                  ?
                </button>
              </label>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PlayerList;
