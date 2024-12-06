import FormItem from '@/components/palworld/FormItem';
import type FormItemProps from '@/domains/form-item';
import { useWindowSize } from '@/hooks/window-size';
import { Flex, Form, Input } from 'antd';
import type { CSSProperties } from 'react';
import './form-item-group.less';

type Props = {
  items: FormItemProps[];
  style?: CSSProperties;
};

const FormItemGroup: React.FC<Props> = ({ items, style = {} }) => {
  const windowSize = useWindowSize();
  return (
    <>
      <Flex
        className="form-item-group"
        vertical
        style={{
          ...style,
          marginLeft: 12,
          height: windowSize.height - 128,
        }}
      >
        {items.map(item => {
          // @ts-ignore
          return <FormItem key={item.name} {...item} />;
        })}
      </Flex>
    </>
  );
};

export default FormItemGroup;
