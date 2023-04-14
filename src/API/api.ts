import { IAPICurrency, IAPICurrencyHistory, IAPIResults, Interval } from '../@types/common';
import { API_URL } from '../@types/constants';

export async function fetchTopThreeCurrency(): Promise<IAPIResults> {
  const res = await fetch(`${API_URL}?limit=3`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  return res.json();
}

export async function fetchTableInfo(offset: number, limit: number): Promise<IAPIResults> {
  const res = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  return res.json();
}

export async function fetchCurrencyInfo(id: string): Promise<IAPICurrency> {
  const res = await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  return res.json();
}

export async function fetchHistory(id: string, interval: Interval): Promise<IAPICurrencyHistory> {
  const res = await fetch(`${API_URL}/${id}/history?interval=${interval}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  const data: IAPICurrencyHistory = await res.json();
  return data;
}
