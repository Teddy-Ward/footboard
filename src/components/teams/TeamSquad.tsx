import React from "react";

interface TeamSquadProps {
  teamName: string;
  teamId: string;
}

const TeamSquad: React.FC<TeamSquadProps> = ({ teamName, teamId }) => {
  return <h1>{teamName} {teamId}</h1>;
};

export default TeamSquad;
