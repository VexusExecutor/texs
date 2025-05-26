// Game Types
export type Position = {
  x: number;
  y: number;
};

export type Entity = {
  id: string;
  position: Position;
  radius: number;
  color: string;
  velocity: Position;
  type: 'player' | 'food' | 'obstacle';
};

export type Player = Entity & {
  name: string;
  score: number;
  isPlayer: boolean;
};

export type GameState = {
  players: Player[];
  food: Entity[];
  obstacles: Entity[];
  mapSize: {
    width: number;
    height: number;
  };
};

export type UserConfig = {
  playerName: string;
  playerColor: string;
};

// UI Types
export type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  color: string;
};

export type GameStats = {
  playerCount: number;
  mapSize: {
    width: number;
    height: number;
  };
  serverName: string;
};

// Input Types
export type GameInput = {
  angle: number;
  boost: boolean;
  action: boolean;
};