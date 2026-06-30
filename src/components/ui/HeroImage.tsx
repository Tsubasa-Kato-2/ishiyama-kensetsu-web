"use client";

import { useState } from "react";

export default function HeroImage({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="石山建設の施工事例"
      className="absolute inset-0 w-full h-full object-cover object-center"
      onError={() => setFailed(true)}
    />
  );
}
