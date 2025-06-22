import React, { useState } from 'react';
import { PieChart } from 'lucide-react';
import { dsaProblems } from './data/problems';
import { onePieceQuotes } from './data/quotes';
import { getCurrentBackground } from './utils/backgroundImages';
import { useProgress } from './hooks/useProgress';
import { Header } from './components/Header';
import { CategoryProgress } from './components/CategoryProgress';
import { SearchFilters } from './components/SearchFilters';
import { ProblemCard } from './components/ProblemCard';
import { QuoteModal } from './components/QuoteModal';
import { OnePieceModal } from './components/OnePieceModal';
import type { OnePieceQuote } from './types';

function App() {
  const { problems, toggleProblemStatus } = useProgress(dsaProblems);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<OnePieceQuote | null>(null);
  const [showOnePieceModal, setShowOnePieceModal] = useState(false);

  const categories = [...new Set(problems.map(p => p.category))];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || problem.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || problem.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const solvedCount = problems.filter(p => p.solved).length;
  const totalCount = problems.length;
  const progressPercentage = (solvedCount / totalCount) * 100;

  const handleProblemToggle = (id: number) => {
    const wasSolved = toggleProblemStatus(id);
    
    if (wasSolved) {
      // Show random quote
      const randomQuote = onePieceQuotes[Math.floor(Math.random() * onePieceQuotes.length)];
      setCurrentQuote(randomQuote);
      setShowQuoteModal(true);

      // Check if all problems are now solved
      const newSolvedCount = problems.filter(p => p.solved).length + 1;
      if (newSolvedCount === totalCount) {
        setTimeout(() => {
          setShowQuoteModal(false);
          setShowOnePieceModal(true);
        }, 3000);
      }
    }
  };

  const getCategoryStats = () => {
    return categories.map(category => {
      const categoryProblems = problems.filter(p => p.category === category);
      const solved = categoryProblems.filter(p => p.solved).length;
      const total = categoryProblems.length;
      return { category, solved, total, percentage: (solved / total) * 100 };
    });
  };

  const currentBackground = getCurrentBackground(progressPercentage);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.85), rgba(15, 23, 42, 0.90)), url('${currentBackground.url}')`
      }}
    >
      {/* Quote Modal */}
      {showQuoteModal && currentQuote && (
        <QuoteModal quote={currentQuote} onClose={() => setShowQuoteModal(false)} />
      )}

      {/* One Piece Unlocked Modal */}
      {showOnePieceModal && (
        <OnePieceModal onClose={() => setShowOnePieceModal(false)} />
      )}

      <Header 
        solvedCount={solvedCount} 
        totalCount={totalCount} 
        progressPercentage={progressPercentage} 
      />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Master the <span className="text-orange-500">Grand Line</span> of DSA
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Conquer all 180 problems from Striver's DSA Sheet. Each solved problem brings you closer to your dream placement - <span className="font-bold text-orange-400">THE ONE PIECE!</span>
            </p>
          </div>

          <CategoryProgress categories={getCategoryStats()} />
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          categories={categories}
          difficulties={difficulties}
        />

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProblems.map(problem => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              onToggle={handleProblemToggle}
            />
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-8">
              <PieChart className="w-24 h-24 mx-auto text-slate-400" />
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4">No Problems Found</h3>
            <p className="text-slate-400 text-xl">Try adjusting your search or filters to find more problems!</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/95 border-t border-slate-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-slate-300 text-xl mb-2">
              "The <span className="text-orange-400 font-semibold">One Piece</span> is real... and so is your dream job!"
            </p>
            <p className="text-slate-500 text-sm">
              Complete all 180 problems and become the Pirate King of Programming • Built with ⚔️ by aspiring pirates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;