import { IAPICurrencyHistory, IAPIResults, Interval } from '../@types/common';
import { API_URL } from '../@types/constants';

export async function fetchData(): Promise<IAPIResults> {
  const res = await fetch(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
    },
  });
  const data: IAPIResults = await res.json();
  return data;
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
