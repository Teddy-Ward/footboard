import React from "react";

interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

interface TeamCardProps {
  team: TeamData;
  teamBadge: string; 
  onSelect: (teamName: string, teamBadge: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onSelect }) => {
  const handleClick = () => {
    onSelect(team.strTeam, team.idTeam);
  };

  return (
    <div className="team-card" onClick={handleClick}>
      <h2>{team.strTeam}</h2>
      <img src={team.strTeamBadge} alt={team.strTeam + " Logo"} />
    </div>
  );
};

export default TeamCard;
