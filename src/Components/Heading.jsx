import React from "react";

export default function Heading({ heading }) {
  return (
    <div className={`bg-secondary max-w-[400px] skew-x-12 p-3 my-0 mx-auto`}>
      <h2 className="text-3xl text-center skew-x-[-12deg] font-bold">
        {heading}
      </h2>
    </div>
  );
}
