import React from 'react';
import { IBriefcaseContext } from '../@types/common';

export const BriefcaseContext = React.createContext<IBriefcaseContext>({
  purchasePrice: '0',
  briefcaseInfo: [],
  setBriefcaseInfo: () => {},
  setPurchasePrice: () => {},
});
