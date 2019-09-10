import * as React from 'react';
import { elementReducer } from '../reducers/elementReducer';
import { TElement, TId } from '../types';
import { elementsData } from './elementsData';

export function useElements() {
  const [state, dispatch] = React.useReducer(elementReducer, elementsData);

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

  return { state, add, edit, remove };
}
