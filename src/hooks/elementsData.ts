import { TElementData } from '../types';

export const elementsData: TElementData = {
  data: {
    el1: {
      id: 'el1',
      attributes: [
        { id: 'attr1', name: 'attr1', value: 'value1' },
        { id: 'attr2', name: 'attr2', value: 'value2' },
      ],
      children: ['el2'],
    },
    el2: {
      id: 'el2',
      attributes: [],
      children: [],
    },
    el3: {
      id: 'el3',
      attributes: [],
      children: ['el4'],
    },
    el4: {
      id: 'el4',
      attributes: [],
      children: [],
    },
    el5: {
      id: 'el5',
      attributes: [{ id: 'attr1', name: 'attr1', value: 'value1' }],
      children: [],
    },
  },
  root: ['el1', 'el3'],
};
