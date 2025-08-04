import { Suspense, lazy } from "react";
import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

const Icon = ({ name, className, ...props }: IconProps) => {
  const LazyIcon = lazy(() => import(`@icon/${name}.svg?react`)); // Dynamic SVG rendering

  return (
    <Suspense fallback={<div></div>}>
      <LazyIcon
        className={`min-w-3 min-h-3 ${className}`}
        aria-hidden="true"
        focusable="false"
        {...props}
      />
    </Suspense>
  );
};

export default Icon;
