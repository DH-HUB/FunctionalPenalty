import { startGame } from '../src/game';

test('Le jeu se déroule correctement', () => {
  expect(() => startGame()).not.toThrow();
});
