import React from 'react';
import TeamCard from './TeamCard';


interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string; 
}

interface TeamGridProps {
  data: TeamData[];
  isLoading: boolean;
  error: string | null;
  onSelect: (teamName: string, teamId: string) => void;
}

const TeamGrid: React.FC<TeamGridProps> = ({ data, isLoading, error, onSelect }) => {
  return (
    <div className="team-card-container">
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        data.map((team) => (
          <TeamCard key={team.idTeam} team={team} teamId={team.idTeam} onSelect={onSelect} />
        ))
      )}
    </div>
  );
};

export default TeamGrid;