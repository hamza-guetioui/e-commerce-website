"use client";

import { useRouter } from "next/navigation";

function FilterBar() {
  const router = useRouter();
  function hundleClick() {
    router.push("http://localhost:3000/products?name='idokan'");
  }
  return (
    <div className="w-full bg-gray-300 text-center">
      <button
        onClick={hundleClick}
        className="py-1 px-5 border-2 border-black rounded-md text-bold"
      >
        filter
      </button>
    </div>
  );
}

export default FilterBar;
