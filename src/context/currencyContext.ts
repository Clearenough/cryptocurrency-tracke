import React from 'react';
import { ICurrencyContext } from '../@types/common';

export const CurrencyContext = React.createContext<ICurrencyContext>({
  currencyInfo: [],
  setCurrencyInfo: () => {},
});
