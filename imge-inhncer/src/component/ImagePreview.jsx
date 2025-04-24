import React from "react";

const ImagePreview = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="realPic bg-slate-70 p-6 flex justify-center items-center">
        image here
      </div>
      <div className="enhancedPic bg-slate-70 p-6 flex justify-center items-center">
        image 2 here
      </div>
    </div>
  );
};

export default ImagePreview;
