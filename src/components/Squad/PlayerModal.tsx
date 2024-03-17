import React from 'react';
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
        <button className="close-button" onClick={onClose}>
          &times; 
        </button>
        <h2>{player.strPlayer}</h2>
        <div>
          <p>
            <strong>Team:</strong> {player.strTeam}
          </p>
          {/* ... Add more later ... */}
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;