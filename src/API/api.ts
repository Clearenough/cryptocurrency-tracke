import { IAPIResults } from '../@types/common';
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
