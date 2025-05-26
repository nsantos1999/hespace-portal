import { useController, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../../ErrorMessage';
import { HiCheck } from 'react-icons/hi';
import { IoAlert } from 'react-icons/io5';
import { FaQuestion } from 'react-icons/fa6';
import { useRef } from 'react';

export interface RHFSelectOption {
  value: any;
  label: string;
}

export interface RHFSelectProps {
  name: string;
  label: string;
  options: RHFSelectOption[];
  initialOptionLabel?: string;
  info?: string;
  required?: boolean;
}

export function RHFSelect({
  name,
  label,
  options,
  info,
  initialOptionLabel,
  required,
  ...rest
}: RHFSelectProps) {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  // Reference to the select element
  const selectRef = useRef<HTMLSelectElement>(null);

  // Focus the select when the label is clicked
  const handleLabelClick = () => {
    selectRef.current?.focus();
    selectRef.current?.click();
  };

  return (
    <div
      className={`w-full h-full border rounded-lg py-1 px-2 ${
        fieldState.error ? 'border-red-500' : 'border-primary-light'
      }`}
    >
      <div className="mb-3 flex items-center gap-2">
        <label
          htmlFor={name}
          onClick={handleLabelClick}
          className={`block text-sm font-medium p-0 ${
            fieldState.error ? 'text-red-600' : 'text-gray-700'
          } cursor-pointer`}
        >
          {label}
          {required && ' *'}
        </label>
        {info && (
          <div className="relative group">
            <div className="flex items-center justify-center w-4 h-4 border rounded-full cursor-pointer text-gray-500 border-gray-300 hover:text-gray-700">
              <FaQuestion className="text-xs" />
            </div>
            <div className="absolute hidden w-40 p-2 mt-1 text-xs text-white bg-black rounded-md group-hover:block">
              {info}
            </div>
          </div>
        )}
      </div>
      <select
        id={name}
        {...field}
        {...rest}
        ref={selectRef} // Attach the reference here
        value={field.value === undefined ? '' : field.value}
        onChange={(e) => (e.target.value === '' ? field.onChange(undefined) : field.onChange(e))}
        required={required}
        className="w-full text-gray-700 border-none"
      >
        <option value="">{initialOptionLabel || 'Selecione...'}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {fieldState.error && <ErrorMessage message={fieldState.error.message} />}
    </div>
  );
}
