import { useState, useEffect } from 'react';
import { DSAProblem } from '../types';

export const useProgress = (initialProblems: DSAProblem[]) => {
  const [problems, setProblems] = useState<DSAProblem[]>(initialProblems);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('dsaProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setProblems(prev => prev.map(problem => ({
        ...problem,
        solved: progress[problem.id] || false
      })));
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (updatedProblems: DSAProblem[]) => {
    const progress = updatedProblems.reduce((acc, problem) => {
      acc[problem.id] = problem.solved;
      return acc;
    }, {} as Record<number, boolean>);
    localStorage.setItem('dsaProgress', JSON.stringify(progress));
  };

  const toggleProblemStatus = (id: number): boolean => {
    const problem = problems.find(p => p.id === id);
    const wasSolved = problem?.solved || false;
    
    const updatedProblems = problems.map(problem => 
      problem.id === id ? { ...problem, solved: !problem.solved } : problem
    );
    
    setProblems(updatedProblems);
    saveProgress(updatedProblems);
    
    // Return true if problem was just solved (not unsolved)
    return !wasSolved && updatedProblems.find(p => p.id === id)?.solved === true;
  };

  return { problems, toggleProblemStatus };
};