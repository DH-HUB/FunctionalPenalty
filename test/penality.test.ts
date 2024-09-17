import { playPenalty, Team } from '../src/penalty';

test('Les tirs de pénalty doivent retourner un score valide', () => {
  const shot = playPenalty(Team.A);
  expect(shot === 0 || shot === 1).toBe(true);
});
