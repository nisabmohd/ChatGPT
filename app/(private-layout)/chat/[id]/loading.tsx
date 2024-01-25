import { Skeleton } from "@/components/ui/skeleton";

export default function ChatLoading() {
  return (
    <div>
      <div className="flex flex-col gap-12 min-h-[80vh]">
        <div className="flex flex-col gap-4">
          <Skeleton className="max-w-[700px] h-[40px] rounded-md" />
          <Skeleton className="w-[70%] h-[20px] rounded-md" />
          <Skeleton className="w-[30%] h-[20px] rounded-md" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="max-w-[700px] h-[40px] rounded-md" />
          <Skeleton className="w-[82%] h-[20px] rounded-md" />
          <Skeleton className="w-[45%] h-[20px] rounded-md" />
        </div>
      </div>
      <div className=" flex flex-row items-center gap-4 mt-5 bottom-0 sticky pb-8 pt-1 bg-background">
        <Skeleton className="w-[95%] h-[55px] rounded-md" />
        <Skeleton className="w-[3%] h-[55px] rounded-md" />
      </div>
    </div>
  );
}
