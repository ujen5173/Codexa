"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { isCloudinary } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { AdvancedImage } from "cloudinary-react";
import { useState } from "react";
import { Img as Image } from "react-image";

const BlurImage = ({
  alt,
  src,
  className,
  style,
  sizes,
  priority,
}: {
  alt: string;
  src: string;
  style?: Record<string, string>;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full aspect-[1/1.6]">
      {isLoading && <Skeleton className="absolute inset-0 animate-pulse" />}
      {isCloudinary(src) ? (
        <AdvancedImage
          width="1200"
          height="700"
          onLoad={() => setIsLoading(false)}
          src={src}
          alt={alt}
          sizes={sizes}
          draggable={false}
          {...style}
          preload={!!priority}
          className={cn(
            "rounded-lg w-full h-full object-cover transition-opacity duration-100",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          className={cn(
            "rounded-lg w-full h-full object-cover transition-opacity duration-100",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          draggable={false}
          width="1200"
          height="700"
        />
      )}
    </div>
  );
};

export default BlurImage;
