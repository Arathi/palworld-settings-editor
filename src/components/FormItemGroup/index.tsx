import type { CSSProperties } from "react";
import type { Props as FormItemProps } from "../palworld-ui/FormItem";
import FormItem from "../palworld-ui/FormItem";

import "./index.less";

type Props = {
  header?: React.ReactNode;
  items: FormItemProps<unknown>[];
  height: number;
  style?: CSSProperties;
};

function FormItemGroup(props: Props) {
  const items: React.ReactNode[] = [];

  props.items.forEach((props, index) => {
    let key = `form-item-${index}`;
    if (props.name !== undefined) {
      key = `form-item-${props.name}`;
    }
    items.push(<FormItem key={key} {...props} />);
  });

  return (
    <div
      className="form-item-group"
      style={{ ...props.style, height: props.height }}
    >
      {props.header}
      <div className="form-item-group-container">{items}</div>
    </div>
  );
}

export default FormItemGroup;
