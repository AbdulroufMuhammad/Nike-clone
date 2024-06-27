// Hero.js
import React from "react";
import Button from "../component/button"; // Ensure correct import path
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constant"; // Ensure correct import path
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../component/ShoeCard"; // Ensure correct import path
import { useState } from "react";



const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <div>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-8 max-container pl-10"
      >
        <div className="relative xl-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="font-mono text-coral-red text-xl">Our summer collections</p>
          <h1 className="mt-10 font-mono max-sm:[52] max-sm:leading-none text-8xl font-bold">
            <span className="pr-10 xl:bg-white xl:whitespace-nowrap z-10 relative">The New Arrival</span>
            <br />
            <span className="text-coral-red mt-2 inline-block">Nike</span> shoes
          </h1>
          <p className="font-mono text-lg text-slate-700 mt-6 mb-10">discover Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Button label="Shop now" iconURL={arrowRight} />
          <div className="flex justify-start items-start gap-12 lg:gap-16 md:gap-11 sm:gap-8 flex-wrap w-full mt-8">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ##########################note############################# */}
        <div className="flex relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
          <img src={bigShoeImg} alt="Big Shoe" width={610} height={500} className="relative z-10 object-contain" />
          <div className="flex absolute gap-4 sm:gap-6 bottom-[3%]">
            {shoes.map((shoe) => 
              <div key={shoe}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigPics={(shoe) => {setBigShoeImg(shoe)}}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
