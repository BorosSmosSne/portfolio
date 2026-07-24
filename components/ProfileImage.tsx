"use client";

import { useState } from "react";

/**
 * Shows the real portrait at /images/profile.jpg. Until that file is uploaded,
 * it gracefully falls back to the SVG placeholder so the layout never breaks.
 */
export default function ProfileImage() {
  const [src, setSrc] = useState("/images/profile.jpg");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Portrait of Heng Chhay"
      onError={() => setSrc("/images/Capture%20One%20Catalog0260.jpg")}
      className="aspect-[4/5] w-full rounded-card object-cover shadow-soft"
    />
  );
}
