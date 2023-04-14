import { useMemo, useReducer, useState } from 'react';
import { IBriefcaseInfo, ICurrencyInfo } from '../../@types/common';
import { LOCALSTORAGE_BRIEFCASE_INFO_KEY } from '../../@types/constants';
import {
  BriefcaseContext,
  briefcaseStateInitialValue,
  briefcaseReducer,
} from '../../context/briefcaseContext';
import { CurrencyContext } from '../../context/currencyContext';

interface IAppContextProvidersProps {
  children: React.ReactNode;
}

function AppContextProviders({ children }: IAppContextProvidersProps) {
  const [currencyInfo, setCurrencyInfo] = useState<ICurrencyInfo[]>([]);

  const localStorageBriefcaseValue = useMemo(() => {
    const localStorageValue = localStorage.getItem(LOCALSTORAGE_BRIEFCASE_INFO_KEY);
    let result: IBriefcaseInfo[] = [];
    if (localStorageValue) {
      result = JSON.parse(localStorageValue);
    }
    return result;
  }, []);

  const [state, dispatch] = useReducer(briefcaseReducer, {
    ...briefcaseStateInitialValue,
    briefcaseInfo: localStorageBriefcaseValue,
  });

  return (
    <CurrencyContext.Provider
      value={{
        currencyInfo,
        setCurrencyInfo,
      }}
    >
      <BriefcaseContext.Provider
        value={{
          briefcaseState: state,
          briefcaseDispatch: dispatch,
        }}
      >
        {children}
      </BriefcaseContext.Provider>
    </CurrencyContext.Provider>
  );
}

export default AppContextProviders;
