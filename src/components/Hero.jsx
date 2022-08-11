import HeroImageMobile from "../images/mobile/image-hero.jpg";
import HeroImageDesktop from "../images/desktop/image-hero.jpg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import { useState } from "react";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-screen">
      <img className="md:hidden" src={HeroImageMobile} alt="Hero" />
      <img
        className="hidden md:inline-block max-h-full xl:w-screen"
        src={HeroImageDesktop}
        alt="Hero"
      />
      <div className="absolute w-full top-0 flex items-center justify-between py-10 px-6 lg:px-56">
        <img src={logo} alt="Logo" />
        <button onClick={() => setMenuOpen(true)} className="md:hidden">
          <img src={hamburger} alt="" />
        </button>
        <div
          className={`${
            menuOpen ? "absolute" : "hidden"
          } top-0 left-0 bg-black h-screen w-screen z-50`}
        >
          <div className="flex justify-between py-10 px-6">
            <img src={logo} alt="Logo" />
            <button onClick={() => setMenuOpen(false)}>
              <img src={Close} alt="Close Button" />
            </button>
          </div>

          <div className="flex flex-col space-y-5 items-start justify-center pl-8 mt-32">
            <p className="text-white text-3xl cursor-pointer hover:underline underline-offset-8">
              About
            </p>
            <p className="text-white text-3xl cursor-pointer hover:underline underline-offset-8">
              Careers
            </p>
            <p className="text-white text-3xl cursor-pointer hover:underline underline-offset-8">
              Events
            </p>
            <p className="text-white text-3xl cursor-pointer hover:underline underline-offset-8">
              Products
            </p>
            <p className="text-white text-3xl cursor-pointer hover:underline underline-offset-8">
              Support
            </p>
          </div>
        </div>
        <div className="hidden md:flex space-x-10 xl:space-x-16">
          <p className="nav">About</p>
          <p className="nav">Careers</p>
          <p className="nav">Events</p>
          <p className="nav">Products</p>
          <p className="nav">Support</p>
        </div>
      </div>
      <div className="absolute 2xl:hidden py-4 px-6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border flex items-center justify-center">
        <h1 className="text-[2.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] leading-none text-white">
          IMMERSIVE <br /> EXPERIENCES <br /> THAT <br /> DELIVER
        </h1>
      </div>
      <div className="hidden absolute py-7 pl-8 pr-32 ml-60 left-0 top-[57%] -translate-y-1/2 border 2xl:flex items-center justify-center">
        <h1 className="2xl:text-[6.1rem] leading-none text-white">
          IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
        </h1>
      </div>
    </div>
  );
}

export default Hero;
