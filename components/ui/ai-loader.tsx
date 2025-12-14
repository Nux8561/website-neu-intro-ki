"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";

export const AILoader = ({ text = "Generating" }: { text?: string }) => {
  return (
    <div className={cn("loader-wrapper")}>
      {text.split("").map((letter, index) => (
        <span key={index} className="loader-letter">
          {letter}
        </span>
      ))}
      <div className="loader"></div>
    </div>
  );
};

