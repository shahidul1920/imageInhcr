import React from "react";

const ImageEnhSection = () => {
  return (
    <section className="bg-slate-700 w-full h-screen">
      <div className="imageSection container mx-auto grid grid-cols-2">
        <div className="imageUpload">
          <label
            htmlFor="fileInfut"
            className="flex justify-center items-center cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
          >
            <span className="text-lg font-medium text-gray-600">
              Click or drag to upload your image
            </span>
            <input type="file" id="fileInfut" className="hidden" />
          </label>
        </div>
      </div>
    </section>
  );
};

export default ImageEnhSection;
