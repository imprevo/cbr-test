import { Element, Id } from '../types';

type State = {
  data: Element[];
};

type ActionAdd = { type: 'add'; payload: Element };
type ActionEdit = { type: 'edit'; payload: Element };
type ActionRemove = { type: 'remove'; payload: Id };
type Actions = ActionAdd | ActionEdit | ActionRemove;

const initialState: State = {
  data: [],
};

export function elementReducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case 'edit':
      return {
        ...state,
        data: state.data.map(element => {
          if (action.payload.id === element.id) {
            return action.payload;
          }
          return element;
        }),
      };
    case 'remove':
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
}
