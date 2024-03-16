import React from 'react';

interface TeamData { 
  idTeam: string;
  strTeam: string; 
  strTeamBadge: string;
}

interface TeamCardProps {
  team: TeamData; 
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="team-card"> 
      <h2>{team.strTeam}</h2>
      <img src={team.strTeamBadge} alt={team.strTeam + " Logo"} />
    </div>
  );
};

export default TeamCard;