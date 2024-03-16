import React, { useState, useEffect } from "react";
import fetchTeamData from "utils/fetchTeamData";
import TeamGrid from "components/teams/TeamGrid";
import TeamSquad from "components/teams/TeamSquad";

interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

const Main: React.FC = () => {
  const [data, setData] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null); 


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


  const handleTeamSelect = (teamName: string) => {
    setSelectedTeam(teamName);
    console.log(teamName)
  };

  return (
    <main className="main-content">
      <div className="scrollable-container">
      <TeamGrid data={data} isLoading={isLoading} error={error}  onSelect={handleTeamSelect}  /> 
      {selectedTeam && <TeamSquad teamName={selectedTeam} />}
      </div>
    </main>
  );
};

export default Main;
