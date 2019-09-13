import * as React from 'react';
import { ButtonIcon } from '../../ui/ButtonIcon';
import { TElement } from '../element-core/types';
import { AddChildElementModal } from '../element-form/AddChildElementModal';
import { EditElementModal } from '../element-form/EditElementModal';
import styles from './ElementItem.module.css';
import {
  JsonKey,
  JsonString,
  JsonObject,
  JsonArray,
  JsonBlock,
} from '../../ui/Json';

type Props = {
  data: TElement;
  onRemove: () => void;
};

export const ElementItem: React.FC<Props> = ({ children, data, onRemove }) => {
  const { id, name, attributes } = data;

  return (
    <JsonBlock>
      <span className={styles.element}>
        <JsonObject>
          <span className={styles.target}>
            <JsonKey>id</JsonKey>
            <JsonString>{id}</JsonString>,
            <span className={styles.buttons}>
              <AddChildElementModal id={id} name={name} />
              <EditElementModal id={id} name={name} />
              <ButtonIcon name="trash" onClick={onRemove} />
            </span>
            <JsonBlock name="name">
              <JsonString>{name}</JsonString>
            </JsonBlock>
            <JsonBlock name="attributes">
              <JsonArray>
                {attributes.length > 0 &&
                  attributes.map(({ id, name, value }) => (
                    <JsonBlock key={id}>
                      <JsonObject>
                        <JsonBlock name="id">
                          <JsonString>{id}</JsonString>
                        </JsonBlock>
                        <JsonBlock name="name">
                          <JsonString>{name}</JsonString>
                        </JsonBlock>
                        <JsonBlock name="value">
                          <JsonString>{value}</JsonString>
                        </JsonBlock>
                      </JsonObject>
                    </JsonBlock>
                  ))}
              </JsonArray>
              ,
            </JsonBlock>
          </span>
          <JsonBlock name="children">
            <JsonArray>{children}</JsonArray>
          </JsonBlock>
        </JsonObject>
      </span>
    </JsonBlock>
  );
};
