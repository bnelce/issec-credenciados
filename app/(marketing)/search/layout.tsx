import React from "react";
import CategoryList from "./_components/CategoryList";

interface layoutProps {
  children: React.ReactNode;
}

function layout({ children }: layoutProps) {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block ">
        {/* Category  */}
        <CategoryList />
      </div>
      <div className="col-span-4 md:col-span-3">{children}</div>
    </div>
  );
}

export default layout;
