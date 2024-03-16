import React from "react";

interface TeamSquadProps {
  teamName: string;
}

const TeamSquad: React.FC<TeamSquadProps> = ({ teamName }) => {
  return <h1>{teamName}</h1>;
};

export default TeamSquad;
