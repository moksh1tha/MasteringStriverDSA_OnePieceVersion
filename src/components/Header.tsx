import React from 'react';
import { Anchor } from 'lucide-react';

interface HeaderProps {
  solvedCount: number;
  totalCount: number;
  progressPercentage: number;
}

export const Header: React.FC<HeaderProps> = ({ solvedCount, totalCount, progressPercentage }) => {
  return (
    <header className="bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 sticky top-0 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center border border-orange-500/50 shadow-lg">
              <Anchor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Striver DSA Sheet</h1>
              <p className="text-sm text-slate-400 font-medium">180 Problems • One Piece Adventure</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{solvedCount}<span className="text-slate-400">/{totalCount}</span></div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Problems Solved</p>
            </div>
            
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(148, 163, 184, 0.2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgb(234, 88, 12)"
                  strokeWidth="2.5"
                  strokeDasharray={`${progressPercentage}, 100`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};