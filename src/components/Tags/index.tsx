import { Flex, type FlexProps, Tag, type TagProps } from 'antd';
import { useMemo } from 'react';

type Props = Omit<FlexProps, 'children' | 'onChange'> & {
  name: string;
  values: string[];
  color: TagProps['color'];
  onChange: (values: string[]) => void;
  nameWidth?: number;
};

const Tags: React.FC<Props> = ({
  name,
  values,
  color,
  onChange,
  nameWidth = 200,
}) => {
  const tags = useMemo(() => {
    const nodes: React.ReactNode[] = [
      <div key="name" style={{ width: nameWidth }}>
        {name}：
      </div>,
    ];
    for (const value of values) {
      nodes.push(<Tag color={color}>{value}</Tag>);
    }
    return nodes;
  }, [name, values, color, nameWidth]);
  return <Flex>{tags}</Flex>;
};

export default Tags;
