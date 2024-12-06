import { type CSSProperties, useMemo } from 'react';
import './index.less';

const CLASS_NAME = 'pwc-button';
export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  onClick?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
};

const Button: React.FC<ButtonProps> = ({
  className,
  children = '',
  style = {},
  onClick,
}) => {
  return (
    <>
      <div className={`pwc-button ${className}`} style={style}>
        <div className="background" />
        <div className="block top-left" />
        <div className="block top-right" />
        <div className="block bottom-left" />
        <div className="block bottom-right" />
        <button type="button" onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
