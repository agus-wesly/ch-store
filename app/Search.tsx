"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = () => {
    //Take value of input and navigate to search page
    if (!inputRef.current?.value) return;
    router.push(`/search/${inputRef.current.value}`);
  };

  return (
    <div className="w-full items-center mt-5 md:mt-0 flex bg-white border-2 border-gray-300 pr-5">
      <input
        type="text"
        ref={inputRef}
        name="search"
        id="search"
        placeholder="Search for everything..."
        className="flex-1 focus:outline-none px-5 py-3 w-full "
      />
      <img
        src="/search.svg"
        alt="search"
        className="w-6 h-6 object-contain cursor-pointer opacity-70"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default Search;
