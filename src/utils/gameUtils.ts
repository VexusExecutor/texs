import { Entity, Player, Position, LeaderboardEntry } from '../types';

// Generate random positions within map bounds
export const getRandomPosition = (mapSize: { width: number; height: number }): Position => {
  return {
    x: Math.random() * mapSize.width,
    y: Math.random() * mapSize.height,
  };
};

// Generate random color in hex format
export const getRandomColor = (): string => {
  const colors = [
    '#3b82f6', // Blue
    '#8b5cf6', // Purple
    '#ec4899', // Pink
    '#f43f5e', // Rose
    '#ef4444', // Red
    '#f59e0b', // Amber
    '#10b981', // Emerald
    '#14b8a6', // Teal
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Generate random entities (food, obstacles)
export const generateRandomEntities = (
  count: number, 
  type: 'food' | 'obstacle', 
  mapSize: { width: number; height: number }
): Entity[] => {
  const entities: Entity[] = [];
  
  for (let i = 0; i < count; i++) {
    const position = getRandomPosition(mapSize);
    const radius = type === 'food' ? 5 + Math.random() * 5 : 20 + Math.random() * 40;
    const color = type === 'food' ? getRandomColor() : '#1e293b';
    
    entities.push({
      id: `${type}-${i}`,
      position,
      radius,
      color,
      velocity: { x: 0, y: 0 },
      type,
    });
  }
  
  return entities;
};

// Generate random AI players
export const generateRandomPlayers = (
  count: number,
  mapSize: { width: number; height: number }
): Player[] => {
  const players: Player[] = [];
  const botNames = [
    'Nexus', 'Quantum', 'Cipher', 'Zenith', 'Apex', 
    'Vortex', 'Omega', 'Pulse', 'Nova', 'Spectre',
    'Echo', 'Rift', 'Void', 'Titan', 'Phantom'
  ];
  
  for (let i = 0; i < count; i++) {
    const position = getRandomPosition(mapSize);
    const color = getRandomColor();
    const name = botNames[Math.floor(Math.random() * botNames.length)];
    const score = Math.floor(Math.random() * 1000);
    
    players.push({
      id: `bot-${i}`,
      position,
      radius: 20 + Math.random() * 20,
      color,
      velocity: { x: 0, y: 0 },
      type: 'player',
      name: `${name}${Math.floor(Math.random() * 100)}`,
      score,
      isPlayer: false,
    });
  }
  
  return players;
};

// Calculate distance between two positions
export const calculateDistance = (pos1: Position, pos2: Position): number => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

// Check collision between two entities
export const checkCollision = (entity1: Entity, entity2: Entity): boolean => {
  const distance = calculateDistance(entity1.position, entity2.position);
  return distance < entity1.radius + entity2.radius;
};

// Get top N players for leaderboard
export const getLeaderboard = (players: Player[], limit: number = 10): LeaderboardEntry[] => {
  return [...players]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(player => ({
      id: player.id,
      name: player.name,
      score: player.score,
      color: player.color,
    }));
};

// Calculate camera position centered on player
export const calculateCameraPosition = (
  player: Player,
  canvasSize: { width: number; height: number },
  mapSize: { width: number; height: number }
): Position => {
  // Center the camera on the player
  let x = player.position.x - canvasSize.width / 2;
  let y = player.position.y - canvasSize.height / 2;
  
  // Clamp camera to map bounds
  x = Math.max(0, Math.min(mapSize.width - canvasSize.width, x));
  y = Math.max(0, Math.min(mapSize.height - canvasSize.height, y));
  
  return { x, y };
};

// Convert world coordinates to screen coordinates
export const worldToScreen = (
  worldPos: Position,
  cameraPos: Position,
  zoom: number = 1
): Position => {
  return {
    x: (worldPos.x - cameraPos.x) * zoom,
    y: (worldPos.y - cameraPos.y) * zoom,
  };
};

// Convert screen coordinates to world coordinates
export const screenToWorld = (
  screenPos: Position,
  cameraPos: Position,
  zoom: number = 1
): Position => {
  return {
    x: screenPos.x / zoom + cameraPos.x,
    y: screenPos.y / zoom + cameraPos.y,
  };
};

// Calculate angle between two positions in degrees
export const calculateAngle = (from: Position, to: Position): number => {
  return Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
};