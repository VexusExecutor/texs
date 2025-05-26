import { useEffect, useState } from 'react';
import { GameProvider } from './context/GameContext';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import Background from './components/Background';
import { UserConfig } from './types';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [userConfig, setUserConfig] = useState<UserConfig>({
    playerName: '',
    playerColor: '#3b82f6',
  });

  useEffect(() => {
    // Preload assets or perform initial setup
    const savedName = localStorage.getItem('vexus-player-name');
    const savedColor = localStorage.getItem('vexus-player-color');
    
    if (savedName) {
      setUserConfig(prev => ({ ...prev, playerName: savedName }));
    }
    
    if (savedColor) {
      setUserConfig(prev => ({ ...prev, playerColor: savedColor }));
    }
  }, []);

  const startGame = (config: UserConfig) => {
    // Save user preferences
    localStorage.setItem('vexus-player-name', config.playerName);
    localStorage.setItem('vexus-player-color', config.playerColor);
    
    setUserConfig(config);
    setGameStarted(true);
  };

  const exitGame = () => {
    setGameStarted(false);
  };

  return (
    <GameProvider>
      <div className="relative min-h-screen w-screen overflow-hidden">
        <Background />
        
        {gameStarted ? (
          <GameScreen userConfig={userConfig} onExit={exitGame} />
        ) : (
          <HomeScreen onStart={startGame} initialConfig={userConfig} />
        )}
      </div>
    </GameProvider>
  );
}

export default App;