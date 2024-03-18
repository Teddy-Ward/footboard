import React, { useState } from "react";
import { Player } from "components/Squad/PlayerTypes";

interface PitchProps {
  squadPlayers: Player[];
}


const Pitch: React.FC<PitchProps> = ({ squadPlayers }) => {
  const [selectedFormation, setSelectedFormation] = useState("4-4-2"); // Default

  const formations = {
    "4-4-2": [
      { x: "50%", y: "90%" }, // Goalkeeper
      { x: "35%", y: "70%" }, // Defender 1
      { x: "65%", y: "70%" }, // Defender 2
    ],
    "3-4-3": [
      { x: "50%", y: "70%" }, // Goalkeeper
      { x: "35%", y: "70%" }, // Defender 1
      { x: "65%", y: "70%" }, // Defender 2
    ],
  };
  return (
    <div className="pitch-container">
      <select
        value={selectedFormation}
        onChange={(e) => setSelectedFormation(e.target.value)}
      >
        <option value="4-4-2">4-4-2</option>
        <option value="3-4-3">3-4-3</option>
      </select>
      <img
        src={require("../../assets/images/pitch.svg").default}
        alt="Football Pitch"
      />
      {[...Array(3)].map((_, index) => {
        const circlePosition = formations[selectedFormation as "4-4-2" | "3-4-3"][index];

        return (
          <img
            src={require("../../assets/images/red-circle.svg").default}
            alt="Red Circle"
            key={index}
            className="red-circle"
            style={{
              position: "absolute",
              left: circlePosition.x,
              top: circlePosition.y,
              transform: `translate(-50%, -50%)`,
              width: "40px",
              height: "40px",
            }}
          />
        );
      })}
    </div>
  );
};

export default Pitch;
