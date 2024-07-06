import { ButtonProp } from './Button.type';

function Button({ className, onClick, name }: ButtonProp) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
