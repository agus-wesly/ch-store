"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="text-lg font-bold cursor-pointer"
    >
      &#8592;
    </div>
  );
}

export default BackButton;
