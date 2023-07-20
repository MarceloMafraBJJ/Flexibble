"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface LoadmoreProps {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const Loadmore = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  hasNextPage,
}: LoadmoreProps) => {
  const router = useRouter();

  const handleNavigation = (direction: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    if (direction === "next" && hasNextPage) {
      currentParams.delete("startCursor");
      currentParams.set("endCursor", endCursor);
    } else if (direction === "first" && hasPreviousPage) {
      currentParams.delete("endCursor");
      currentParams.set("startCursor", startCursor);
    }

    const newSearchParams = currentParams.toString();

    const newPathname = `${window.location.pathname}?${newSearchParams}`;

    router.push(newPathname);
  };

  return (
    <div className="w-full flexCenter gap-5 mt-10">
      {hasPreviousPage && (
        <Button
          title="First Page"
          handleClick={() => handleNavigation("first")}
        />
      )}
      {hasNextPage && (
        <Button title="Next" handleClick={() => handleNavigation("next")} />
      )}
    </div>
  );
};

export default Loadmore;
