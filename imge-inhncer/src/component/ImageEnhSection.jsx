import React from "react";

const ImageEnhSection = () => {

  const ShowImageHandler = (e) =>{
    const file = e.target.files[0];
    console.log(file);
    
  }


  return (
    <section>
      <div className="imageSection">
        <div className="imageUpload grid place-items-center">
          <label
            htmlFor="fileInfut"
            className="bg-white flex justify-center items-center cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
          >
            <span className="text-lg font-medium text-gray-600">
              Click or drag to upload your image
            </span>
            <input type="file" id="fileInfut" className="hidden" onChange={ShowImageHandler} />
          </label>
        </div>
      </div>
    </section>
  );
};

export default ImageEnhSection;
