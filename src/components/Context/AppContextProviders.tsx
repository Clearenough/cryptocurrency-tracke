import { useMemo, useReducer } from 'react';
import { IBriefcaseInfo } from '../../@types/common';
import { LOCALSTORAGE_BRIEFCASE_INFO_KEY } from '../../@constants/localStorageKeys';
import {
  BriefcaseContext,
  briefcaseStateInitialValue,
  briefcaseReducer,
} from '../../context/briefcaseContext';

interface IAppContextProvidersProps {
  children: React.ReactNode;
}

function AppContextProviders({ children }: IAppContextProvidersProps) {
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
    <BriefcaseContext.Provider
      value={{
        briefcaseState: state,
        briefcaseDispatch: dispatch,
      }}
    >
      {children}
    </BriefcaseContext.Provider>
  );
}

export default AppContextProviders;
