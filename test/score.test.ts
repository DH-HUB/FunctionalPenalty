import { updateScore } from '../src/score';

test('Le score est mis à jour correctement', () => {
  const initialScore = { score: 0 };
  const updatedScore = updateScore(initialScore, 1);
  expect(updatedScore.score).toBe(1);
});
