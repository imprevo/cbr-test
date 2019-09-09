import * as React from 'react';
import { elementReducer } from '../reducers/elementReducer';
import { Element, Id } from '../types';
import { elementsData } from './elementsData';

const tempData = {
  data: elementsData,
};

export function useElements() {
  const [state, dispatch] = React.useReducer(elementReducer, tempData);

  const add = React.useCallback(
    (payload: Element) => dispatch({ type: 'add', payload }),
    [dispatch]
  );

  const edit = React.useCallback(
    (payload: Element) => dispatch({ type: 'edit', payload }),
    [dispatch]
  );

  const remove = React.useCallback(
    (payload: Id) => dispatch({ type: 'remove', payload }),
    [dispatch]
  );

  return { state, add, edit, remove };
}
