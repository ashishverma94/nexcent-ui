"use client";
import Image from "next/image";
import { slides } from "@/data/data";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import HeroImage from "@/assets/images/hero.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const dots = (
    <>
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "w-2.5 h-2.5 bg-brand-primary"
              : "w-2.5 h-2.5 bg-brand-primary/30"
          }`}
        />
      ))}
    </>
  );

  return (
    <div className="w-full relative bg-silver-neutral lg:h-130 xl:h-149.75 py-10 lg:py-16 xl:py-24 px-4 xl:px-36 flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-16 xl:gap-26 overflow-hidden">
      <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col gap-4 w-full shrink-0">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[64px] xl:leading-19">
                  <span>{slide.title}</span>{" "}
                  <span className="text-brand-primary">{slide.highlight}</span>
                </h1>
                <p className="text-neutral-gray">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Button size={"lg"}>Register</Button>
        </div>

        <div className="flex md:hidden items-center gap-2">{dots}</div>
      </div>

      <Image
        src={HeroImage}
        alt="hero-image"
        width={391}
        className=" md:w-80 lg:w-97.75 lg:h-101.75"
      />

      <div className="hidden md:flex absolute bottom-4 left-[50%] translate-x-[-25%] items-center gap-2">
        {dots}
      </div>
    </div>
  );
};

export default HeroSection;
