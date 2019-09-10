import { TElement, TId, TElementData } from '../types';
import { removeChildById as omitChildById } from '../utils/element';

type State = TElementData;

type ActionAdd = { type: 'add'; payload: TElement };
type ActionEdit = { type: 'edit'; payload: TElement };
type ActionRemove = { type: 'remove'; payload: TId };
type Actions = ActionAdd | ActionEdit | ActionRemove;

export function elementReducer(state: State, action: Actions) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    case 'edit':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    case 'remove':
      return {
        ...state,
        data: omitChildById(state.data, action.payload),
        root: state.root.filter(id => id !== action.payload),
      };

    default:
      return state;
  }
}
