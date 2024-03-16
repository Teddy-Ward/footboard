import React from "react";

interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

interface TeamCardProps {
  team: TeamData;
  onSelect: (teamName: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onSelect }) => {
  const handleClick = () => {
    onSelect(team.strTeam);
  };

  return (
    <div className="team-card" onClick={handleClick}>
      <h2>{team.strTeam}</h2>
      <img src={team.strTeamBadge} alt={team.strTeam + " Logo"} />
    </div>
  );
};

export default TeamCard;
