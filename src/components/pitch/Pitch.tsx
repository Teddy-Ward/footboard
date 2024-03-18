import React from "react";
import { Player } from "components/Squad/PlayerTypes";

interface PitchProps {
  squadPlayers: Player[];
}

const Pitch: React.FC<PitchProps> = ({ squadPlayers }) => {
  return (
    <div className="pitch-container">
      <img
        src={require("../../assets/images/pitch.svg").default}
        alt="Football Pitch"
      />
    </div>
  );
};

export default Pitch;
