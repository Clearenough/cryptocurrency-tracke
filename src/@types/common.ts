export interface ICurrencyInfo {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

export interface ICurrencyHistory {
  priceIsd: string;
  time: number;
  date: string;
}

export interface ICurrencyForBriefcase {
  id: string;
  name: string;
  priceUsd: string;
}

export interface IBriefcaseInfo extends ICurrencyForBriefcase {
  quantity: string;
}

export interface IAPIResults {
  data: ICurrencyInfo[];
  timestamp: number;
}

export interface ICurrencyContext {
  currencyInfo: ICurrencyInfo[];
  setCurrencyInfo: (currencyInfo: ICurrencyInfo[]) => void;
}

export interface IBriefcaseContext {
  purchasePrice: string;
  briefcaseInfo: IBriefcaseInfo[];
  setBriefcaseInfo: (currencyInfo: IBriefcaseInfo[]) => void;
  setPurchasePrice: (price: string) => void;
}

export type Interval = 'h1' | 'd1' | 'm1';
