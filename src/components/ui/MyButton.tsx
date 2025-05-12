import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        outline: 'border border-gray-300 hover:bg-gray-300 text-black',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-6',
      },
      rounded: {
        true: 'rounded-md',
        false: 'rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: false,
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, rounded }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default MyButton;
