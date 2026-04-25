"use client";

import Image from "next/image";
import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function SafeImage({ src, alt, className }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`img-fallback ${className ?? ""}`.trim()}>🐾</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={640}
      height={427}
      sizes="(max-width: 720px) 100vw, 360px"
      loading="lazy"
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      onError={() => setFailed(true)}
    />
  );
}
