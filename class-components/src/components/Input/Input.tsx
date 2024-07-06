import { InputProps } from './Input.type';

function Input({ value, type, className, placeholder, onChange }: InputProps) {
  return (
    <input
      value={value}
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
