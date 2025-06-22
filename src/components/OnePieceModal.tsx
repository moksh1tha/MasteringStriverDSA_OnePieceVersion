import React from 'react';

interface OnePieceModalProps {
  onClose: () => void;
}

export const OnePieceModal: React.FC<OnePieceModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-16 max-w-3xl w-full border border-slate-700/50 shadow-2xl text-center">
        <div className="text-8xl mb-8 animate-bounce">👑</div>
        <h1 className="text-7xl font-bold text-white mb-6 animate-pulse tracking-tight">
          MASTERY
        </h1>
        <h2 className="text-4xl font-bold text-slate-300 mb-8">
          ACHIEVED!
        </h2>
        <p className="text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Congratulations! You've conquered all 180 DSA problems and achieved
          <span className="font-bold text-white"> complete programming mastery!</span>
        </p>
        <div className="text-xl text-slate-300 italic mb-12">
          "The greatest treasure was the knowledge you gained along the way!"
        </div>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="text-6xl">🏆</div>
          <div className="text-6xl">💎</div>
          <div className="text-6xl">⚔️</div>
        </div>
        <button
          onClick={onClose}
          className="px-12 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors text-xl"
        >
          Continue Your Journey
        </button>
      </div>
    </div>
  );
};