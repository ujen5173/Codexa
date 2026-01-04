import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "file:inline-flex flex bg-transparent selection:bg-primary dark:bg-input/30 file:bg-transparent disabled:opacity-50 shadow-xs border border-input aria-invalid:border-destructive file:border-0 rounded-full focus-visible:outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 w-full min-w-0 file:h-7 file:font-medium selection:text-primary-foreground placeholder:text-muted-foreground file:text-foreground text-sm file:text-sm transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        destructive:
          "border-destructive text-destructive placeholder:text-destructive/50 focus-visible:ring-destructive/20 focus-visible:ring-[3px]",
        outline:
          "border-input bg-background focus-visible:border-ring focus-visible:ring-[3px]",
        secondary:
          "bg-secondary text-secondary-foreground border-transparent focus-visible:ring-secondary/50 focus-visible:ring-[3px]",
        ghost: "border-0 focus-visible:ring-0 shadow-none bg-transparent",
        "ghost-outline":
          "rounded-md border border-transparent hover:border-input focus-visible:border-ring focus-visible:ring-[3px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

interface IconProps {
  icon: React.ElementType;
  iconStyle?: string;
  iconPlacement?: "left" | "right";
}

interface IconRefProps {
  icon?: never;
  iconStyle?: string;
  iconPlacement?: undefined;
}

export type InputIconProps = IconProps | IconRefProps;

const Input = React.forwardRef<HTMLInputElement, InputProps & InputIconProps>(
  (
    {
      className,
      variant,
      size,
      icon: Icon,
      iconStyle,
      iconPlacement = "left",
      type,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative flex items-center w-full">
        {Icon && iconPlacement === "left" && (
          <div className="top-1/2 left-3 absolute text-muted-foreground/80 -translate-y-1/2 pointer-events-none">
            <Icon className={cn("size-4", iconStyle)} />
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ variant, size, className }),
            Icon && iconPlacement === "left" && "pl-10",
            Icon && iconPlacement === "right" && "pr-10"
          )}
          ref={ref}
          {...props}
        />
        {Icon && iconPlacement === "right" && (
          <div className="top-1/2 right-3 absolute text-muted-foreground/80 -translate-y-1/2 pointer-events-none">
            <Icon className={cn("size-4", iconStyle)} />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
