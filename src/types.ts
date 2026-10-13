export type Language = 'en' | 'ar' | 'ku';

export interface TopicContent {
  definition: string;
  symptoms: string[];
  causes: string[];
  stats: string;
  treatment: string[];
  realStory: string;
  whenToSeeDoctor: string[];
}

export interface Topic {
  id: string;
  category: string;
  title: {
    en: string;
    ar: string;
    ku: string;
  };
  subtitle?: {
    en: string;
    ar: string;
    ku: string;
  };
  content: {
    en: TopicContent;
    ar: TopicContent;
    ku: TopicContent;
  };
  source: string;
  citation: string;
}

export interface Ocean {
  id: string;
  title: {
    en: string;
    ar: string;
    ku: string;
  };
  subtitle: {
    en: string;
    ar: string;
    ku: string;
  };
  iconName: string;
  islandColor: string;
  topics: Topic[];
}
