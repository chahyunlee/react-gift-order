import { useState } from "react";

interface UseInputProps {
  initailValue?: string;
  validation?: (value: string) => string | null;
}

export const useInput = ({ validation }: UseInputProps = {}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>("");
  const [touched, setTouched] = useState(false);

  const handleInput = (newValue: string) => {
    setValue(newValue);
    if (touched && validation) {
      setError(validation(newValue));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validation) {
      setError(validation(value));
    }
  };

  return {
    value,
    error,
    touched,
    handleInput,
    handleBlur,
  };
};
