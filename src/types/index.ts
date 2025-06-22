export interface DSAProblem {
  id: number;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solved: boolean;
  url: string;
  tags: string[];
}

export interface OnePieceQuote {
  character: string;
  quote: string;
  image: string;
}

export interface CategoryProgress {
  category: string;
  solved: number;
  total: number;
  percentage: number;
}