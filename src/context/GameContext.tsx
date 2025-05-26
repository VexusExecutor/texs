import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { GameState, Player, Entity, Position, GameInput } from '../types';
import { generateRandomEntities, generateRandomPlayers } from '../utils/gameUtils';

interface GameContextType {
  gameState: GameState;
  localPlayer: Player | null;
  gameInput: GameInput;
  updateInput: (input: Partial<GameInput>) => void;
  frameCount: number;
  resetGame: () => void;
  pause: boolean;
  setPause: (paused: boolean) => void;
}

const defaultGameInput: GameInput = {
  angle: 0,
  boost: false,
  action: false,
};

const initialGameState: GameState = {
  players: [],
  food: [],
  obstacles: [],
  mapSize: {
    width: 4000,
    height: 4000,
  },
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [localPlayer, setLocalPlayer] = useState<Player | null>(null);
  const [gameInput, setGameInput] = useState<GameInput>(defaultGameInput);
  const [frameCount, setFrameCount] = useState(0);
  const [pause, setPause] = useState(false);

  // Initialize game state
  useEffect(() => {
    resetGame();
  }, []);

  // Game loop
  useEffect(() => {
    if (pause) return;

    const gameLoop = setInterval(() => {
      setFrameCount(prev => prev + 1);
      updateGameState();
    }, 16); // ~60fps

    return () => clearInterval(gameLoop);
  }, [gameState, gameInput, pause]);

  const resetGame = () => {
    // Generate initial game state
    const mapSize = { width: 4000, height: 4000 };
    const initialFood = generateRandomEntities(100, 'food', mapSize);
    const initialObstacles = generateRandomEntities(20, 'obstacle', mapSize);
    const initialPlayers = generateRandomPlayers(10, mapSize);
    
    // Create player in the center
    const player: Player = {
      id: 'player',
      position: { x: mapSize.width / 2, y: mapSize.height / 2 },
      radius: 30,
      color: '#3b82f6',
      velocity: { x: 0, y: 0 },
      type: 'player',
      name: 'Player',
      score: 0,
      isPlayer: true,
    };

    setGameState({
      players: [...initialPlayers, player],
      food: initialFood,
      obstacles: initialObstacles,
      mapSize,
    });

    setLocalPlayer(player);
    setGameInput(defaultGameInput);
    setFrameCount(0);
    setPause(false);
  };

  const updateInput = (input: Partial<GameInput>) => {
    setGameInput(prev => ({ ...prev, ...input }));
  };

  const updateGameState = () => {
    if (!localPlayer) return;

    // Update player position based on input
    const speed = gameInput.boost ? 5 : 3;
    const angleRad = gameInput.angle * (Math.PI / 180);
    const velocityX = Math.cos(angleRad) * speed;
    const velocityY = Math.sin(angleRad) * speed;

    // Simple physics update
    setGameState(prev => {
      // Update player position
      const updatedPlayers = prev.players.map(player => {
        if (player.id === 'player') {
          // Local player movement
          const newX = Math.max(0, Math.min(prev.mapSize.width, player.position.x + velocityX));
          const newY = Math.max(0, Math.min(prev.mapSize.height, player.position.y + velocityY));
          
          return {
            ...player,
            position: { x: newX, y: newY },
            velocity: { x: velocityX, y: velocityY },
          };
        } else {
          // AI players movement (simplified)
          const randomAngle = Math.random() * Math.PI * 2;
          const aiSpeed = 1;
          const vx = Math.cos(randomAngle) * aiSpeed;
          const vy = Math.sin(randomAngle) * aiSpeed;
          
          const newX = Math.max(0, Math.min(prev.mapSize.width, player.position.x + vx));
          const newY = Math.max(0, Math.min(prev.mapSize.height, player.position.y + vy));
          
          return {
            ...player,
            position: { x: newX, y: newY },
            velocity: { x: vx, y: vy },
          };
        }
      });

      // Update local player reference
      const updatedLocalPlayer = updatedPlayers.find(p => p.id === 'player') || null;
      setLocalPlayer(updatedLocalPlayer);

      // Collision detection and other game logic would go here
      
      return {
        ...prev,
        players: updatedPlayers,
      };
    });
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        localPlayer,
        gameInput,
        updateInput,
        frameCount,
        resetGame,
        pause,
        setPause,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};