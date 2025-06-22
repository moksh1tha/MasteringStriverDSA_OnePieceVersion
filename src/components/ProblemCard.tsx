import React from 'react';
import { CheckCircle, Circle, ExternalLink, Star, Zap, Flame } from 'lucide-react';
import { DSAProblem } from '../types';

interface ProblemCardProps {
  problem: DSAProblem;
  onToggle: (id: number) => void;
}

const difficultyConfig = {
  'Easy': { 
    styles: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: <Star className="w-4 h-4" />
  },
  'Medium': { 
    styles: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: <Zap className="w-4 h-4" />
  },
  'Hard': { 
    styles: 'bg-red-50 text-red-800 border-red-200',
    icon: <Flame className="w-4 h-4" />
  }
};

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onToggle }) => {
  const { styles, icon } = difficultyConfig[problem.difficulty];

  return (
    <div
      className={`bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer group shadow-lg relative overflow-hidden ${
        problem.solved 
          ? 'border-emerald-500/40 bg-emerald-950/20 shadow-emerald-500/10' 
          : 'border-slate-700/30 hover:border-slate-600/50 hover:shadow-slate-500/10'
      }`}
      onClick={() => onToggle(problem.id)}
    >
      {/* Luffy Hover Effect */}
      <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
        <div className="text-4xl animate-bounce"></div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-slate-200 transition-colors leading-tight">
            {problem.title}
          </h3>
          <p className="text-sm text-slate-400 font-medium">#{problem.id} • {problem.category}</p>
        </div>
        <div className={`ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          problem.solved 
            ? 'bg-emerald-500 border-emerald-500 scale-110' 
            : 'border-slate-400 group-hover:border-slate-300'
        }`}>
          {problem.solved ? (
            <CheckCircle className="w-5 h-5 text-white" />
          ) : (
            <Circle className="w-5 h-5 text-slate-400 group-hover:text-slate-300" />
          )}
        </div>
      </div>

      {/* Difficulty and Tags */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm border font-medium ${styles}`}>
          {icon}
          <span>{problem.difficulty}</span>
        </span>
        <div className="flex flex-wrap gap-1">
          {problem.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
        <span className="text-slate-400 font-medium text-sm">
          Problem #{problem.id}
        </span>
        <a
          href={problem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-white text-sm font-medium transition-colors group-hover:text-slate-300"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Solve</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};