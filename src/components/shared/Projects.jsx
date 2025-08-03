import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import useIntersection from "./useIntersection";
import { projects } from "@/constants";

export default function Projects() {
  const [ref, ratio] = useIntersection({
    threshold: [0.05, 0.2, 0.4, 0.55, 0.8, 1.0],
  });

  const getBlurClass = () => {
    // If ratio is undefined or 0, don't apply blur (fallback for deployment issues)
    if (!ratio || ratio === 0) return "blur-none";
    if (ratio >= 0.3) return "blur-none";
    if (ratio >= 0.2) return "blur-sm";
    if (ratio >= 0.05) return "blur-md";
    return "blur-lg";
  };

  return (
    <div className="w-full md:w-[98%] mx-auto  max-sm:w-[98%] ">
      <div className="md:w-[90%] lg:w-[65%] mx-auto max-md:px-5 ">
        <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl m-5 xl:mt-32">
          Projects
        </h1>
      </div>
      <div
        ref={ref}
        className={`transition-all duration-500 ease-in-out ${getBlurClass()}`}
      >
        <BentoGrid className="grid-cols-2 grid-rows-8 h-[1000px] md:grid-rows-6 md:grid-cols-5 md:h-[1200px] lg:grid-rows-7 lg:grid-cols-6 lg:h-[1400px] gap-2">
          {projects.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
