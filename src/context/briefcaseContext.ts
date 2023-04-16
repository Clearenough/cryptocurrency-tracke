import React from 'react';

import {
  BriefcaseActionType,
  IBriefcaseAction,
  IBriefcaseContext,
  IBriefcaseState,
} from '../@types/common';
import { LOCALSTORAGE_BRIEFCASE_INFO_KEY } from '../@constants/localStorageKeys';

export const briefcaseStateInitialValue: IBriefcaseState = {
  briefcaseInfo: [],
  loading: false,
  errors: [],
};

export function briefcaseReducer(state: IBriefcaseState, action: IBriefcaseAction) {
  switch (action.type) {
    case BriefcaseActionType.ADD: {
      if (action.payload.currency && action.payload.quantity) {
        const { id, name, priceUsd } = action.payload.currency;
        const index = state.briefcaseInfo.findIndex((currency) => currency.id === id);
        if (index === -1) {
          const newState = {
            ...state,
            briefcaseInfo: [
              ...state.briefcaseInfo,
              { id, name, priceUsd, quantity: action.payload.quantity.toString() },
            ],
          };
          localStorage.setItem(
            LOCALSTORAGE_BRIEFCASE_INFO_KEY,
            JSON.stringify(newState.briefcaseInfo)
          );
          return newState;
        } else {
          const newState = {
            ...state,
            briefcaseInfo: state.briefcaseInfo.map((currency) => {
              if (currency.id === id && action.payload.quantity) {
                return {
                  ...state.briefcaseInfo[index],
                  quantity: (
                    action.payload.quantity + +state.briefcaseInfo[index].quantity
                  ).toString(),
                };
              }
              return currency;
            }),
          };
          localStorage.setItem(
            LOCALSTORAGE_BRIEFCASE_INFO_KEY,
            JSON.stringify(newState.briefcaseInfo)
          );
          return newState;
        }
      }
      return state;
    }
    case BriefcaseActionType.REMOVE: {
      if (action.payload.currencyId) {
        const newState = {
          ...state,
          briefcaseInfo: state.briefcaseInfo.filter(
            (currency) => currency.id !== action.payload.currencyId
          ),
        };
        localStorage.setItem(
          LOCALSTORAGE_BRIEFCASE_INFO_KEY,
          JSON.stringify(newState.briefcaseInfo)
        );
        return newState;
      }
      return state;
    }
    default:
      return state;
  }
}

export const BriefcaseContext = React.createContext<IBriefcaseContext>({
  briefcaseState: briefcaseStateInitialValue,
  briefcaseDispatch: () => undefined,
});
