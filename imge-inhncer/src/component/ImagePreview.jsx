import React from "react";

const ImagePreview = () => {
  const img = false;
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className={`realPic bg-slate-50 w-full md:w-auto rounded-xl flex flex-col overflow-hidden ${img ? "h-auto" : "h-[200px]"}`}>
        <h2 className="text-xl font-semibold text-center p-2 bg-slate-700 text-white w-full">
          Original Image
        </h2>
        {img ? (
          <img src="" className="w-full h-full object-cover" alt="" />
        ) : (
          <div className="noImgSec w-full h-full grid place-items-center bg-gray-400 text-gray-500">
            No Image Selected
          </div>
        )}
      </div>
      <div className={`enhancedPic bg-slate-50 w-full md:w-auto flex rounded-xl overflow-hidden flex-col ${img ? "h-auto" : "h-[200px]"}`}>
        <h2 className="text-xl font-semibold text-center p-2 bg-slate-700 text-white w-full">
          Inhanched Image
        </h2>
        <img src="" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default ImagePreview;
