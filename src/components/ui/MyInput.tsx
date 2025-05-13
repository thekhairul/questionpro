import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

const inputVariants = cva(
  'block w-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'border border-gray-300 focus:ring-2 focus:ring-blue-500',
        error: 'border border-red-500 focus:ring-2 focus:ring-red-500',
        success: 'border border-green-500 focus:ring-2 focus:ring-green-500',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-8 px-3',
        lg: 'h-12 px-5',
      },
      rounded: {
        true: 'rounded-md',
        false: 'rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: true,
    },
  }
);

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const MyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, size, rounded }), className)}
        {...props}
      />
    );
  }
);

export default MyInput;
