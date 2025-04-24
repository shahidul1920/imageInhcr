import React from "react";
import ImageEnhSection from "../component/ImageEnhSection";
import ImagePreview from "../component/ImagePreview";

const Home = () => {
  return (
    <div>
      <div className="image-main bg-slate-800">
        <ImageEnhSection />
        <ImagePreview />
      </div>
    </div>
  );
};

export default Home;
