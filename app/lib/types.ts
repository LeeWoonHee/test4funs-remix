export interface ExamListType {
  id: number;
  category: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface QuizData {
  image: string;
  title: string;
  answer: string;
}

export interface QuizListType {
  id: number;
  title: string;
  placeholder: string;
  quiz: QuizData[];
}
