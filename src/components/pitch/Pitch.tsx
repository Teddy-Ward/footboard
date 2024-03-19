import React, { useState } from "react";
import { Player } from "components/Squad/PlayerTypes";

interface PitchProps {
  squadPlayers: Player[];
}

const Pitch: React.FC<PitchProps> = ({ squadPlayers }) => {
  const [selectedFormation, setSelectedFormation] = useState("4-4-2"); // Default

  const formations = {
    "4-4-2": [
      { x: "50%", y: "92%" }, // Goalkeeper
      { x: "80%", y: "82%" }, // Defender 1
      { x: "60%", y: "82%" }, // Defender 2
      { x: "40%", y: "82%" }, // Defender 3
      { x: "20%", y: "82%" }, // Defender 4
      { x: "80%", y: "68%" }, // Midfielder 1
      { x: "60%", y: "68%" }, // Midfielder 2
      { x: "40%", y: "68%" }, // Midfielder 3
      { x: "20%", y: "68%" }, // Midfielder 4
      { x: "60%", y: "55%" }, // Forward 1
      { x: "40%", y: "55%" }, // Forward 2
    ],
    "3-4-3": [
      { x: "50%", y: "92%" }, // Goalkeeper
      { x: "75%", y: "82%" }, // Defender 1
      { x: "50%", y: "82%" }, // Defender 2
      { x: "25%", y: "82%" }, // Defender 3
      { x: "80%", y: "68%" }, // Midfielder 1
      { x: "60%", y: "68%" }, // Midfielder 2
      { x: "40%", y: "68%" }, // Midfielder 3
      { x: "20%", y: "68%" }, // Midfielder 4
      { x: "70%", y: "55%" }, // Forward 1
      { x: "50%", y: "55%" }, // Forward 2
      { x: "30%", y: "55%" }, // Forward 3
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
      {[...Array(11)].map((_, index) => {
        const circlePosition =
          formations[selectedFormation as "4-4-2" | "3-4-3"][index];
        const player = squadPlayers[index];

        return (
          <>
          {squadPlayers[index] && (
            <div
              key={index}
              style={{
                position: "absolute",
                left: circlePosition.x,
                top: circlePosition.y,
              }}
            >
              <img
                src={require("../../assets/images/red-circle.svg").default}
                alt="Red Circle"
                className="red-circle"
                style={{
                  position: "relative", 
                  transform: `translate(-50%, -50%)`,
                  width: "40px",
                  height: "40px",
                }}
              />
              <div
                className="player-number"
                style={{
                  position: "absolute",
                  top: "0%",
                  left: "-2%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  cursor: "default",
                }}
              >
                {player.strNumber}
              </div>
            </div>
            ) }
          </>
        );
      })}
    </div>
  );
};

export default Pitch;
