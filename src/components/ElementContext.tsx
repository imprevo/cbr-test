import * as React from 'react';
import { TElement, TId } from '../types';
import { elementReducer } from '../reducers/elementReducer';
import { elementsData } from '../mocks/elements';

const useElementReducer = () => React.useReducer(elementReducer, elementsData);

const StateContext = React.createContext<ReturnType<typeof useElementReducer>>([
  elementsData,
  () => {},
]);

export const useElementState = () => React.useContext(StateContext)[0];

export const useElementById = (id: TId) => {
  const { data } = useElementState();
  return data[id];
};

export const useElementActions = () => {
  const [, dispatch] = React.useContext(StateContext);

  const add = React.useCallback(
    (payload: TElement) => dispatch({ type: 'add', payload }),
    [dispatch]
  );

  const edit = React.useCallback(
    (payload: TElement) => dispatch({ type: 'edit', payload }),
    [dispatch]
  );

  const remove = React.useCallback(
    (payload: TId) => dispatch({ type: 'remove', payload }),
    [dispatch]
  );

  return { add, edit, remove };
};

export const ElementProvider: React.FC = ({ children }) => {
  return (
    <StateContext.Provider value={useElementReducer()}>
      {children}
    </StateContext.Provider>
  );
};
