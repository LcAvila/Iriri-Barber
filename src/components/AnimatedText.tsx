import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  textClassName?: string;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      className,
      textClassName,
      ...props
    },
    ref
  ) => {
    const textVariants: Variants = {
      initial: {
        backgroundPosition: "0% 50%",
      },
      animate: {
        backgroundPosition: "100% 50%",
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "linear",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex justify-center items-center", className)}
        {...props}
      >
        <motion.h1
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent",
            textClassName
          )}
          variants={textVariants}
          initial="initial"
          animate="animate"
          style={{
            backgroundSize: "200% auto",
          }}
        >
          {text}
        </motion.h1>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
