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
export type QuizListType = QuizListItem[];

export interface QuizListItem {
  id: number;
  title: string;
  placeholder: string;
  quiz: QuizData[];
}

export interface QuizConfigItem {
  title: string;
  description: string;
  keywords: string;
  jsonFile: string;
}

export interface QuizConfigType {
  [key: string]: QuizConfigItem;
}
