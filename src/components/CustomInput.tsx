import { useState } from "react";

type CustomInputProps = {
  label: string;
  placeholder: string;
  updateState: (text: string) => void;
  icon?: string;
  pattern?: RegExp;
  successIcon?: string;
};

export default function CustomInput({
  label,
  placeholder,
  icon,
  pattern = /.{3}/,
  updateState,
  successIcon,
}: CustomInputProps) {
  const [inputState, setInputState] = useState("");
  const [inputIcon, setInputIcon] = useState(icon);

  const updateInputState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.currentTarget.value);
  };

  const onInputBlur = () => {
    if (pattern.test(inputState)) {
      updateState(inputState);
      setInputIcon(successIcon);
    } else {
      setInputIcon(icon);
    }
  };

  return (
    <div className="form-item">
      <label className="form-item__label" htmlFor="">
        {label}
      </label>
      <div className="form-item__inner">
        {inputIcon && (
          <img className="form-item__img" src={inputIcon} alt="Картинка" />
        )}
        <input
          onBlur={onInputBlur}
          value={inputState}
          onInput={updateInputState}
          placeholder={placeholder}
          className="form-item__input"
          type="text"
        />
      </div>
    </div>
  );
}
