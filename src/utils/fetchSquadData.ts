interface Player {
  idPlayer: string;
  strNationality: string;
  strPlayer: string;
  strPlayerAlternate: string;
  strTeam: string;
  strTeam2: string;
  dateBorn: string;
  strNumber: string;
  strSigning: string;
  strWage: string;
  strStatus: string;
  strDescriptionEN: string;
  strSide: string;
  strPosition: string;
  strHeight: string;
  strWeight: string;
  strCutout: string;
}

const fetchSquadData = async (
  teamName: string
): Promise<{ players: Player[] }> => {
  try {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/60130162/searchplayers.php?t=${teamName}`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const jsonData = await response.json();
    const extractedData = jsonData.player.map((player: any) => ({
      idPlayer: player.idPlayer,
      strNationality: player.strNationality,
      strPlayer: player.strPlayer,
      strPlayerAlternate: player.strPlayerAlternate,
      strTeam: player.strTeam,
      strTeam2: player.strTeam2,
      dateBorn: player.dateBorn,
      strNumber: player.strNumber,
      strSigning: player.strSigning,
      strWage: player.strWage,
      strStatus: player.strStatus,
      strDescriptionEN: player.strDescriptionEN,
      strSide: player.strSide,
      strPosition: player.strPosition,
      strHeight: player.strHeight,
      strWeight: player.strWeight,
      strCutout: player.strCutout,
    }));
    return { players: extractedData };
  } catch (error) {
    console.error("Error fetching squad data:", error);
    throw error; // Re-throw to allow error handling in the component
  }
};

export default fetchSquadData;
