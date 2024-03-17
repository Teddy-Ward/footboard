import React, { useState, useEffect } from "react";
import fetchTeamData from "utils/fetchTeamData";
import TeamGrid from "components/teams/TeamGrid";
import TeamSquad from "components/Squad/TeamSquad";

interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

interface Team {
  teamBadge: string;
  strTeam: string;
}

const Main: React.FC = () => {
  const [data, setData] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetchTeamData()
      .then((data) => {
        setData(data.teams);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error in Main component:", error);
        setError("Error fetching data, please try again");
        setIsLoading(false);
      });
  }, []);

  const handleTeamSelect = (teamName: string, teamBadge: string) => {
    setSelectedTeam({ strTeam: teamName, teamBadge: teamBadge });
  };

  const handleRemoveSelectedTeam = () => {
    setSelectedTeam(null);
  };

  return (
    <main className="main-content">
      {selectedTeam ? (
        <>
          <TeamSquad
            teamName={selectedTeam.strTeam}
            teamBadge={selectedTeam.teamBadge}
          />
          <button onClick={() => handleRemoveSelectedTeam()}>
            Remove Selected Team
          </button>
        </>
      ) : (
        <TeamGrid
          data={data}
          isLoading={isLoading}
          error={error}
          onSelect={handleTeamSelect}
        />
      )}
    </main>
  );
};

export default Main;
