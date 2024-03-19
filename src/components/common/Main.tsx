import React, { useState, useEffect } from "react";
import fetchTeamData from "utils/fetchTeamData";
import TeamGrid from "components/teams/TeamGrid";
import TeamSquad from "components/Squad/TeamSquad";
import { Player } from "components/Squad/PlayerTypes";
import Pitch from "components/pitch/Pitch";

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
  const [squadPlayers, setSquadPlayers] = useState<Player[]>([]);

  const handleSquadPlayersUpdate = (players: Player[]) => {
    console.log("Selected Players from TeamSquad:", players);

    setSquadPlayers(players);
  };

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
    <>
      <main className="main-content">
        <div className=" scrollable-container ">
          {selectedTeam ? (
            <>
              <div className="pitch-view">
                <div>
                  <TeamSquad
                    teamName={selectedTeam.strTeam}
                    teamBadge={selectedTeam.teamBadge}
                    onUpdateSelectedPlayers={handleSquadPlayersUpdate}
                  />
                </div>
                <Pitch squadPlayers={squadPlayers} />
              </div>
            </>
          ) : (
            <TeamGrid
              data={data}
              isLoading={isLoading}
              error={error}
              onSelect={handleTeamSelect}
            />
          )}
        </div>
      </main>
      {selectedTeam && (
        <div className="remove-team">
          <button onClick={() => handleRemoveSelectedTeam()}>
            Remove Selected Team
          </button>
        </div>
      )}
    </>
  );
};

export default Main;
