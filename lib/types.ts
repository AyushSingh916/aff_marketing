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


export interface Metric {
  name: string;
  rating: number;
}

export interface PurchaseLink {
  store: string;
  price: string;
  link: string;
}

export interface Competitor {
  rank: number;
  image: string;
  title: string;
  description: string;
  details: string;
  metrics: Metric[];
  purchaseLinks: PurchaseLink[];
  topPick: boolean;
}

export interface Product {
  slug: string[];
  image: string;
  title: string;
  updatedDate: string;
  researchLink: string;
  authors: string;
  description: string;
  whyTrustUs: {
    title: string;
    content: string;
    points: string[];
    conclusion: string;
  };
  researchProcess: {
    title: string;
    content: string[];
  };
  comparisonSection: {
    title: string;
    content: string;
    keyPoints: string[];
  };
  competitionSection: {
    title: string;
    competitors: Competitor[];
  };
}