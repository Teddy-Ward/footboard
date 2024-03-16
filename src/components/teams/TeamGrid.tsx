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
}

const TeamGrid: React.FC<TeamGridProps> = ({ data, isLoading, error }) => {
  return (
    <div className="team-card-container">
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        data.map((team) => (
          <TeamCard key={team.idTeam} team={team} /> 
        ))
      )}
    </div>
  );
};

export default TeamGrid;