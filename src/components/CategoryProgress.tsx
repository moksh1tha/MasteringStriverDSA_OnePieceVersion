import React from 'react';
import { CategoryProgress as CategoryProgressType } from '../types';

interface CategoryProgressProps {
  categories: CategoryProgressType[];
}

export const CategoryProgress: React.FC<CategoryProgressProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
      {categories.map(({ category, solved, total, percentage }) => (
        <div 
          key={category} 
          className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
        >
          <h3 className="text-white font-semibold text-sm mb-3 truncate">{category}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-medium">{solved}/{total}</span>
              <span className="text-slate-400 font-medium">{Math.round(percentage)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};