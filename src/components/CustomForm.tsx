import { useMemo, useState } from "react";
import CustomInput from "./CustomInput";

type FormProps<T extends object> = {
  defauldFormState: T;
  inputsData: FormInputsData<T>[];
  requeredFields: Array<keyof T>;
  sendForm: (formState: T) => void;
};

export type FormInputsData<T> = {
  key: keyof T;
  placeholder: string;
  label: string;
  pattern?: RegExp;
  icon?: string;
  successIcon?: string;
};

export default function CustomForm<T extends object>({
  defauldFormState,
  requeredFields,
  inputsData,
  sendForm,
}: FormProps<T>) {
  const [formState, setFormState] = useState<T>(defauldFormState);

  const updateFormState = (key: keyof T, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const formIsValid = useMemo(
    () => requeredFields.every((field) => formState[field]),
    [formState]
  );
  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (formIsValid) {
      sendForm(formState);
    }
  };

  return (
    <form onSubmit={submitForm} className="avia-form">
      <div className="avia-form__main">
        {inputsData.map((input) => (
          <CustomInput
            pattern={input.pattern}
            updateState={(text) => updateFormState(input.key, text)}
            placeholder={input.placeholder}
            label={input.label}
            icon={input.icon}
            successIcon={input.successIcon}
          ></CustomInput>
        ))}
      </div>
      <div className="avia-form__controll">
        <button type="submit" disabled={!formIsValid} className="btn">
          Найти билеты
        </button>
      </div>
    </form>
  );
}
