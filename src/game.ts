import { playPenalty, Team } from './penalty';
import { updateScore, Score } from './score';
import { updateHistory, formatHistory } from './history';

type SessionResult = {
  teamA: Score;
  teamB: Score;
  history: string[];
};

const MAX_SHOTS = 5;

export const startGame = (): string => {
  let result: SessionResult = {
    teamA: { score: 0 },
    teamB: { score: 0 },
    history: [],
  };

  let round = 1;
  while (!hasWinner(result.teamA, result.teamB, round)) {
    const teamAShot = playPenalty(Team.A);
    const teamBShot = playPenalty(Team.B);

    result = {
      teamA: updateScore(result.teamA, teamAShot),
      teamB: updateScore(result.teamB, teamBShot),
      history: updateHistory(result.history, round, teamAShot, teamBShot),
    };

    round++;
  }


  const finalResult = `${formatHistory(result.history)}\nVictoire : ${result.teamA.score > result.teamB.score ? 'Equipe A' : 'Equipe B'}`;
  return finalResult;
};

const hasWinner = (teamA: Score, teamB: Score, round: number): boolean =>
  (round >= MAX_SHOTS && teamA.score !== teamB.score) ||
  (round >= MAX_SHOTS && Math.abs(teamA.score - teamB.score) > (MAX_SHOTS - round));


console.log(startGame());
