// types.ts

export interface MainContent {
    src: string;
    alt: string;
    title: string;
    description: string;
  }
  
  export interface Article {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    date: string;
  }
  
  export interface LatestUpdate {
    title: string;
    date: string;
    author: string;
  }
  
  export interface Data {
    sleepMain: MainContent;
    sleepArticles: Article[];
    electronicsMain: MainContent;
    electronicsArticles: Article[];
  }
  