import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'danger' | 'default' | 'success';
}

export const Button = ({
  variant = 'default',
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={clsx(
        `btn-${variant}`,
        `inline-flex`,
        'justify-center',
        'items-center',
        'gap-1',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
