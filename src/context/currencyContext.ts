import React from 'react';
import { ICurrencyContext, ICurrencyInfo } from '../@types/common';

export const CurrencyContext = React.createContext<ICurrencyContext>({
  currencyInfo: [],
  setCurrencyInfo: (currencyInfo: ICurrencyInfo[]) => {},
});
