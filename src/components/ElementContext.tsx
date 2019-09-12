import * as React from 'react';
import nanoid from 'nanoid';
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
    (payload: { parentId: null | TId }) =>
      dispatch({
        type: 'element/add',
        payload: {
          parentId: payload.parentId,
          element: {
            id: nanoid(),
            attributes: [],
            children: [],
          },
        },
      }),
    [dispatch]
  );

  const edit = React.useCallback(
    (payload: TElement) => dispatch({ type: 'element/edit', payload }),
    [dispatch]
  );

  const remove = React.useCallback(
    (payload: TId) => dispatch({ type: 'element/remove', payload }),
    [dispatch]
  );

  return { add, edit, remove };
};

export const useAttributeActions = () => {
  const [, dispatch] = React.useContext(StateContext);

  const remove = React.useCallback(
    (elementId: TId, attributeId: TId) =>
      dispatch({
        type: 'attribute/remove',
        payload: { attributeId, elementId },
      }),
    [dispatch]
  );

  return { remove };
};

export const ElementProvider: React.FC = ({ children }) => {
  return (
    <StateContext.Provider value={useElementReducer()}>
      {children}
    </StateContext.Provider>
  );
};
