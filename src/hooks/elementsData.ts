import { Element } from '../types';

export const elementsData: Element[] = [
  {
    id: 'el1',
    attributes: [
      { id: 'attr1', name: 'attr1', value: 'value1' },
      { id: 'attr2', name: 'attr2', value: 'value2' },
    ],
    children: [
      {
        id: 'el2',
        attributes: [],
        children: [],
      },
    ],
  },
  {
    id: 'el3',
    attributes: [],
    children: [
      {
        id: 'el4',
        attributes: [],
        children: [],
      },
    ],
  },
  {
    id: 'el5',
    attributes: [{ id: 'attr1', name: 'attr1', value: 'value1' }],
    children: [],
  },
];
