import React from "react";

const Loading = () => {
  return (
    <div className="flex my-16 h-full flex-col items-center justify-center min-h-[100vh] bg-white gap-3">
      <span className="loading loading-spinner loading-lg text-primary scale-125"></span>
    </div>
  );
};

export default Loading;
