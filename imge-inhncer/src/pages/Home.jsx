import React from "react";
import ImageEnhSection from "../component/ImageEnhSection";
import ImagePreview from "../component/ImagePreview";

const Home = () => {
  return (
    <div>
      <div className="image-main bg-slate-800 flex flex-col gap-8 items-center justify-center h-screen px-4 md:px-0">
        <ImageEnhSection />
        <ImagePreview />
      </div>
    </div>
  );
};

export default Home;
