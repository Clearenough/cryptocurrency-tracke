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
  priceIsd: number;
  time: number;
  date: string;
}

export interface IAPIResults {
  data: ICurrencyInfo[];
  timestamp: number;
}

export interface ICurrencyContext {
  currencyInfo: ICurrencyInfo[];
  setCurrencyInfo: (currencyInfo: ICurrencyInfo[]) => void;
}

export type Interval = 'h1' | 'd1' | 'm1';
