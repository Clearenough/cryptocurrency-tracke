import { IAPICurrencyHistory, IAPIResults, Interval } from '../@types/common';
import { API_URL, PAGE_LIMIT, PAGE_SIZE } from '../@types/constants';

export async function fetchData(): Promise<IAPIResults> {
  const res = await fetch(`${API_URL}?limit=${PAGE_SIZE * PAGE_LIMIT}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  return res.json();
}

export async function fetchTableInfo(offset: number): Promise<IAPIResults> {
  const res = await fetch(`${API_URL}?offset=${offset}&limit=${PAGE_SIZE}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  return res.json();
}

export async function fetchCurrencyInfo(id: string): Promise<IAPIResults> {
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
