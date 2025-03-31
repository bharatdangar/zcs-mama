import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  children: ReactNode;
  className?: string;
}

const typography = tv({
  base: "",
  variants: {
    variant: {
      h1: "text-[2.5rem] font-bold",
      h2: "text-[2rem] font-bold",
      h3: "text-[1.625rem] font-bold",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
      p: "text-base",
      small: "text-sm text-gray-600 dark:text-gray-400",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  children,
  className,
}) => {
  const Component =
    variant in typography.variants.variant
      ? (variant as keyof JSX.IntrinsicElements)
      : "p";

  return (
    <Component className={typography({ variant, className })}>
      {children}
    </Component>
  );
};

export default Typography;
