import React from "react";
import { Player } from "./PlayerTypes";

interface PlayerModalProps {
  show: boolean;
  onClose: () => void;
  player: Player;
}

const PlayerModal: React.FC<PlayerModalProps> = ({ show, onClose, player }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>{player.strPlayer}</h2>{" "}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {player.strCutout ? (
          <img src={player.strCutout} alt={player.strPlayer + " Image"} />
        ) : (
          <p>No Image Available</p>
        )}
        <p>
          <strong>Born:</strong> {player.dateBorn}
        </p>
        <p>
          <strong>Team:</strong> {player.strTeam}
        </p>
        <p>
          <strong>Nationality:</strong> {player.strNationality}
        </p>
        <p>
          <strong>Position:</strong> {player.strPosition}
        </p>
        <p>
          <strong>Wage:</strong> {player.strWage}
        </p>
        <p>
          <strong>Height:</strong> {player.strHeight}
        </p>
        <p>
          <strong>Weight:</strong> {player.strWeight}
        </p>
      </div>
    </div>
  );
};

export default PlayerModal;
