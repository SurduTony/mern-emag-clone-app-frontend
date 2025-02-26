import { Skeleton } from "./ui/skeleton";

const SkeletonProductCard = () => {
  return (
    <div className="flex flex-col py-8 px-4 shadow-md max-w-[220px] justify-center items-center gap-4">
      <Skeleton className="w-36 h-32" />

      <div className="flex flex-col gap-1 items-center">
        <Skeleton className="w-44 h-4" />
        <Skeleton className="w-36 h-4" />
        <Skeleton className="w-36 h-4" />
      </div>

      <Skeleton className="w-24 h-4 mt-4" />
    </div>
  );
};

const SkeletonProductSlider = () => {
  return (
    <div className="flex flex-col py-8 px-8">
      <Skeleton className="w-48 h-6 mb-4 ml-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
      </div>
    </div>
  );
};

export default SkeletonProductSlider;
