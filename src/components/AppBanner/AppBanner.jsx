import React from "react";
import bannerImg from "../../assets/website/banner.png";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";


const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "600px",
};

const AppBanner = () => {
  return (
    <div className="conatiner my-14 w-full h-[600px] sm:h-[600px] rounded-3xl">
      <div
        style={BannerStyle}
        className="container w-[1000px] h-[50px] sm:min-h-[200px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold text-black sm:text-4xl text-center">
              Download the app
            </h1>

            <p className="text-center sm:px-20 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              aperiam fugiat ipsum.
            </p>
            {/* Image Link */}
            <div className="flex justify-center items-center gap-4">
              <a href="#" className="max-h-[100px] sm:max-h-[120px] md:max-h-[200px]">
                <img src={AppStoreImg} alt="" />
              </a>
              <a href="#">
                <img src={PlayStoreImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
