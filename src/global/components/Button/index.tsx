import { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { FiLoader } from 'react-icons/fi';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained';
  IconLeft?: React.ReactElement;
  IconRight?: React.ReactElement;
  onClick?(): void;
  className?: string;
  isLoading?: boolean;
}

const buttonStyles = tv({
  base: 'w-full flex items-center justify-center  text-white font-bold py-1 rounded-lg transition focus:outline-none relative',
  variants: {
    variant: {
      outlined: 'outline outline-1 outline-primary-light hover:outline-primary-main text-black',
      contained: 'bg-primary-main hover:bg-primary-dark',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
  },
});

const iconContainerStyles = tv({
  base: 'absolute  flex items-center justify-center p-4',
  variants: {
    side: {
      left: 'left-0',
      right: 'right-0',
    },
  },
});

export function Button({
  children,
  IconLeft,
  IconRight,
  variant = 'contained',
  onClick,
  className,
  isLoading,
  ...rest
}: ButtonProps) {
  const disabled = isLoading || rest.disabled;
  return (
    <button
      {...rest}
      className={buttonStyles({ variant, disabled, className })}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={iconContainerStyles({ side: 'left' })}>
        {isLoading ? <FiLoader className="animate-spin mr-2" size={20} /> : IconLeft}
      </div>
      {children}
      <div className={iconContainerStyles({ side: 'right' })}>{IconRight}</div>
    </button>
  );
}
