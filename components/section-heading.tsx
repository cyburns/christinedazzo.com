import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center justify-center text-center text-4xl font-medium capitalize mb-8 ">
      {children}
    </h2>
  );
}
