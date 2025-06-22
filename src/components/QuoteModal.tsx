import React from 'react';
import { X } from 'lucide-react';
import { OnePieceQuote } from '../types';

interface QuoteModalProps {
  quote: OnePieceQuote;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ quote, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-12 max-w-md w-full border border-slate-700/50 shadow-2xl animate-in fade-in duration-300">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-slate-600 shadow-xl">
            <img 
              src={quote.image} 
              alt={quote.character}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">{quote.character}</h3>
          <p className="text-slate-300 text-xl italic mb-8 leading-relaxed">"{quote.quote}"</p>
          <div className="text-slate-400 font-semibold text-lg">Problem Conquered! 🏆</div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};