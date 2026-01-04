import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  disabled?: boolean;
}

export function MdxCard({
  href,
  className,
  children,
  disabled,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative shadow-md hover:shadow-lg p-6 border rounded-lg transition-shadow",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground">
          {children}
        </div>
      </div>
      {href && (
        <Link to={disabled ? "#" : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  );
}
