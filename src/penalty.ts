export enum Team {
    A = 'A',
    B = 'B',
  }
  
  // Simule un tir aléatoire (1 = marqué, 0 = raté)
  export const playPenalty = (team: Team): number => (Math.random() > 0.5 ? 1 : 0);
  