interface TeamData {
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
}

const fetchTeamData = async (): Promise<{ teams: TeamData[] }> => {
  try {
    const result = await fetch(
      "https://www.thesportsdb.com/api/v1/json/60130162/search_all_teams.php?l=English%20Premier%20League"
    );
    const jsonData = await result.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchTeamData;
