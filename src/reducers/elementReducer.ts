import { TElement, TId, TElementData, TAttribute } from '../types';
import { omitChildById } from '../utils/element';

type State = TElementData;

type ActionElementAdd = {
  type: 'element/add';
  payload: {
    parentId: null | TId;
    element: TElement;
  };
};
type ActionElementEdit = { type: 'element/edit'; payload: TElement };
type ActionElementRemove = { type: 'element/remove'; payload: TId };
type ActionAttributeAdd = {
  type: 'attribute/add';
  payload: {
    elementId: TId;
    attribute: TAttribute;
  };
};
type ActionAttributeEdit = {
  type: 'attribute/edit';
  payload: {
    elementId: TId;
    attribute: TAttribute;
  };
};
type ActionAttributeRemove = {
  type: 'attribute/remove';
  payload: { attributeId: TId; elementId: TId };
};
type Actions =
  | ActionElementAdd
  | ActionElementEdit
  | ActionElementRemove
  | ActionAttributeAdd
  | ActionAttributeEdit
  | ActionAttributeRemove;

export function elementReducer(state: State, action: Actions) {
  switch (action.type) {
    case 'element/add':
      if (
        action.payload.parentId !== null &&
        action.payload.parentId in state.data
      ) {
        return {
          ...state,
          data: {
            ...state.data,
            [action.payload.parentId]: {
              ...state.data[action.payload.parentId],
              children: [
                ...state.data[action.payload.parentId].children,
                action.payload.element.id,
              ],
            },
            [action.payload.element.id]: action.payload.element,
          },
        };
      }
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.element.id]: action.payload.element,
        },
        root: state.root.concat(action.payload.element.id),
      };

    case 'element/edit':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };

    case 'element/remove':
      return {
        ...state,
        data: omitChildById(state.data, action.payload),
        root: state.root.filter(id => id !== action.payload),
      };

    case 'attribute/add':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.elementId]: {
            ...state.data[action.payload.elementId],
            attributes: [
              ...state.data[action.payload.elementId].attributes,
              action.payload.attribute,
            ],
          },
        },
      };

    case 'attribute/edit':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.elementId]: {
            ...state.data[action.payload.elementId],
            attributes: state.data[action.payload.elementId].attributes.map(
              attribute => {
                if (attribute.id === action.payload.attribute.id) {
                  return action.payload.attribute;
                }
                return attribute;
              }
            ),
          },
        },
      };

    case 'attribute/remove':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.elementId]: {
            ...state.data[action.payload.elementId],
            attributes: state.data[action.payload.elementId].attributes.filter(
              ({ id }) => id !== action.payload.attributeId
            ),
          },
        },
      };

    default:
      return state;
  }
}
