export interface Article {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
}

export interface MainContent {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface CategoryData {
  main: MainContent;
  articles: Article[];
}

export interface Data {
  home: CategoryData;
  electronicDevices: CategoryData;
  electronicAppliances: CategoryData;
  automobiles: CategoryData;
  aiTools: CategoryData;
  healthLifestyle: CategoryData;
  clothingBags: CategoryData;
  shoes: CategoryData;
}
