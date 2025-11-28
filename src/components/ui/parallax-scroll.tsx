"use client";
import { cn } from "@/lib/utils";
import { ClickableImage } from "@/components/ui/clickable-image";

interface ParallaxScrollProps {
  images: string[];
  className?: string;
  onImageClick?: (index: number) => void;
}

export const ParallaxScroll = ({
  images,
  className,
  onImageClick,
}: ParallaxScrollProps) => {
  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("w-full py-8 sm:py-12 lg:py-20", className)}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10"
      >
        <div className="grid gap-4 sm:gap-6 lg:gap-10">
          {firstPart.map((el, idx) => (
            <div key={"grid-1" + idx} className="animate-fade-in">
              <ClickableImage
                src={el}
                alt={`Gallery image ${idx}`}
                className="h-48 sm:h-60 md:h-72 lg:h-80 w-full object-cover object-left-top rounded-lg"
                onClick={() => onImageClick?.(idx)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-10">
          {secondPart.map((el, idx) => (
            <div key={"grid-2" + idx} className="animate-fade-in">
              <ClickableImage
                src={el}
                alt={`Gallery image ${idx + third}`}
                className="h-48 sm:h-60 md:h-72 lg:h-80 w-full object-cover object-left-top rounded-lg"
                onClick={() => onImageClick?.(idx + third)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-10">
          {thirdPart.map((el, idx) => (
            <div key={"grid-3" + idx} className="animate-fade-in">
              <ClickableImage
                src={el}
                alt={`Gallery image ${idx + 2 * third}`}
                className="h-48 sm:h-60 md:h-72 lg:h-80 w-full object-cover object-left-top rounded-lg"
                onClick={() => onImageClick?.(idx + 2 * third)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
