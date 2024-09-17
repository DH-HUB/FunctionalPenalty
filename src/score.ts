export type Score = {
    score: number;
  };
  
  export const updateScore = (currentScore: Score, shotResult: number): Score => ({
    score: currentScore.score + shotResult,
  });
  