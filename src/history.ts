export const updateHistory = (
    currentHistory: string[],
    round: number,
    teamAShot: number,
    teamBShot: number
  ): string[] => [
    ...currentHistory,
    `Tir ${round} | Score : ${teamAShot}/${teamBShot} (Equipe A : ${teamAShot > 0 ? '+1' : '0'}, Equipe B : ${teamBShot > 0 ? '+1' : '0'})`,
  ];
  
  export const formatHistory = (history: string[]): string => {
    return history.join('\n');
  };
  