// src/components/ui/shooting-stars-demo.js
import React from "react";
import { ShootingStars } from "./shooting-star";
import { StarsBackground } from "./stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[40rem] rounded-md bg-neutral-900 relative w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="z-10 relative text-3xl md:text-5xl text-white font-medium mb-6">
        Shooting Star x Star Background
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
