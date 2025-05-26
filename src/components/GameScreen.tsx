import React, { useRef, useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { ArrowLeft } from 'lucide-react';
import { UserConfig } from '../types';

interface GameScreenProps {
  userConfig: UserConfig;
  onExit: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ userConfig, onExit }) => {
  const { gameState, localPlayer, updateInput, resetGame, frameCount } = useGame();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  useEffect(() => {
    // This component isn't needed for the Vexus executor website
    // But we'll keep it to maintain compatibility with the original project structure
  }, []);

  return (
    <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center">
      <div className="max-w-md w-full text-center p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Game Screen Placeholder</h2>
        <p className="text-gray-300 mb-6">
          This screen would normally contain the game, but for the Vexus executor website, 
          we're focusing on the download and information pages.
        </p>
        <button 
          onClick={onExit}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center mx-auto"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default GameScreen;