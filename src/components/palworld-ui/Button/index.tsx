import "./index.less";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Button: React.FC<Props> = ({ className = "", children, ...props }) => {
  return (
    <div {...props} className={`pwc-button ${className}`}>
      <div className="pwc-button-background" />
      <div className="pwc-button-vertex top left" />
      <div className="pwc-button-vertex top right" />
      <div className="pwc-button-vertex bottom left" />
      <div className="pwc-button-vertex bottom right" />
      <div className="pwc-button-content">{children}</div>
    </div>
  );
};

export default Button;
