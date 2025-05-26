import { useController, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { MaskUtils } from '@/global/utils/mask.utils';
import { ErrorMessage } from '../../ErrorMessage';

export interface RHFTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  mask?: string;
}

export function RHFTextInput({
  name,
  label,
  type = 'text',
  mask,
  required,
  ...rest
}: RHFTextInputProps) {
  const { control, setValue } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  const [inputType, setInputType] = useState(type);

  const toggleBetweenPasswordAndText = () => {
    setInputType((currentType) => (currentType === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    if (mask) {
      setValue(name, MaskUtils.apply(mask, field.value));
    }
  }, [mask, setValue, name, field.value]);

  return (
    <div>
      <div
        className={`border rounded-lg p-2 w-full relative ${
          fieldState.error ? 'border-red-500' : 'border-primary-light'
        }`}
      >
        {label && (
          <label
            htmlFor={name}
            className={`block text-sm font-medium ${
              fieldState.error ? 'text-red-600' : 'text-gray-700'
            }`}
          >
            {label}
            {required && ' *'}
          </label>
        )}
        <div>
          <input
            {...rest}
            {...field}
            value={mask ? MaskUtils.apply(mask, field.value || '') : field.value}
            type={inputType}
            id={name}
            required={required}
            className="outline-none border-none w-full"
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={toggleBetweenPasswordAndText}
              className="absolute right-2 top-0 bottom-0 p-1 text-gray-600"
            >
              {inputType === 'text' ? (
                <BsEyeSlash className="text-lg" />
              ) : (
                <BsEye className="text-lg" />
              )}
            </button>
          )}
        </div>
      </div>
      {fieldState.error && <p className="mt-1 text-xs text-red-600">{fieldState.error.message}</p>}
    </div>
  );
}
