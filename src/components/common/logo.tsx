import { platformName } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Img } from "react-image";

const SIZES = {
  sm: {
    icon: 18,
    text: "text-xl font-medium",
  },
  md: {
    icon: 25,
    text: "text-2xl font-medium",
  },
  lg: {
    icon: 30,
    text: "text-3xl font-medium",
  },
} as const;

type PROPS = {
  size?: "sm" | "md" | "lg";
  withDot?: boolean;
  onlyIcon?: boolean;
  color?: string;
};

const Logo = ({
  size = "md",
  withDot = false,
  onlyIcon = false,
  color,
}: PROPS) => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center gap-2 select-none">
          <Img
            className="select-none object-cover"
            src="/logo.svg"
            alt="Codexa logo"
            draggable={false}
            width={SIZES[size].icon}
            height={SIZES[size].icon}
          />

          {!onlyIcon && (
            <h1
              className={cn(
                "font-logo",
                SIZES[size].text,
                color ?? "text-slate-800"
              )}
            >
              {platformName}
              {withDot ? "." : ""}
            </h1>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Logo;
