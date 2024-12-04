import './index.less';

type Props = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = props => {
  const { onClick, children, style } = props;
  return (
    <button
      className="pwc-button"
      type="button"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
