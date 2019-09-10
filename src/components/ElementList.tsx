import * as React from 'react';
import { TElementRecord, TIdList } from '../types';
import { ElementItem } from './ElementItem';

type Props = {
  data: TElementRecord;
  list: TIdList;
};

export const ElementList: React.FC<Props> = ({ data, list }) => {
  return (
    <ol>
      {list.map(id => {
        const element = data[id];
        return (
          <li key={id}>
            <ElementItem data={element} />
            {element.children.length > 0 && (
              <ElementList list={element.children} data={data} />
            )}
          </li>
        );
      })}
    </ol>
  );
};
