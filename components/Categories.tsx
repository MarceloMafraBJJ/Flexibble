"use client";

import { categoryFilters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (filter: string) => {
    if (category === filter) {
      return router.push("/");
    }

    router.push(`${pathname}?category=${filter}`);
  };

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            onClick={() => handleTags(filter)}
            className={`px-4 py-3 rounded-lg capitalize whitespace-nowrap ${
              category === filter
                ? "bg-light-white-300 font-medium"
                : "font-normal"
            }`}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
