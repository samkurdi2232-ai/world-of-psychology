import psychologyDbRaw from './data/psychologyDatabase.json';

export interface DatabaseTopic {
  id: number;
  ocean: string;
  category: string;
  title_en: string;
  title_ar: string;
  title_ku: string;
  summary_ku: string;
  full_content_ku: string;
  scientist: string;
  experiment: string;
  symptoms: string[];
  treatments: string[];
  sources: string[];
  keywords: string[];
}

export const psychologyDatabase = psychologyDbRaw as DatabaseTopic[];

export const DATABASE_CATEGORIES = [
  "All Categories",
  "Disorders",
  "Experiments",
  "Scientists & Theories",
  "Therapies & Techniques",
  "Brain & Neuroscience",
  "Social Psychology",
  "Cognitive Psychology",
  "Kurdish Psychology"
];
