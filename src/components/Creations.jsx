import CreationMobile from "./CreationMobile";
import EarthMobile from "../images/mobile/image-deep-earth.jpg";
import NightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import SoccerMobile from "../images/mobile/image-soccer-team.jpg";
import GridMobile from "../images/mobile/image-grid.jpg";
import AboveMobile from "../images/mobile/image-from-above.jpg";
import BorealisMobile from "../images/mobile/image-pocket-borealis.jpg";
import CuriosityMobile from "../images/mobile/image-curiosity.jpg";
import FisheyeMobile from "../images/mobile/image-fisheye.jpg";

import CreationDesktop from "./CreationDesktop";
import EarthDesktop from "../images/desktop/image-deep-earth.jpg";
import NightArcadeDesktop from "../images/desktop/image-night-arcade.jpg";
import SoccerDesktop from "../images/desktop/image-soccer-team.jpg";
import GridDesktop from "../images/desktop/image-grid.jpg";
import AboveDesktop from "../images/desktop/image-from-above.jpg";
import BorealisDesktop from "../images/desktop/image-pocket-borealis.jpg";
import CuriosityDesktop from "../images/desktop/image-curiosity.jpg";
import FisheyeDesktop from "../images/desktop/image-fisheye.jpg";

function Creations() {
  return (
    <>
      {/* Mobile Section */}
      <div className="flex flex-col lg:hidden p-3 items-center justify-center mt-16 mb-64">
        <h2 className="text-4xl">OUR CREATIONS</h2>

        <CreationMobile lineOne="DEEP" lineTwo="EARTH" img={EarthMobile} />
        <CreationMobile
          lineOne="NIGHT"
          lineTwo="ARCADE"
          img={NightArcadeMobile}
        />
        <CreationMobile lineOne="SOCCER" lineTwo="TEAM VR" img={SoccerMobile} />
        <CreationMobile lineOne="THE" lineTwo="GRID" img={GridMobile} />
        <CreationMobile
          lineOne="FROM UP"
          lineTwo="ABOVE VR"
          img={AboveMobile}
        />
        <CreationMobile
          lineOne="POCKET"
          lineTwo="BOREALIS"
          img={BorealisMobile}
        />
        <CreationMobile
          lineOne="THE"
          lineTwo="CURIOSITY"
          img={CuriosityMobile}
        />
        <CreationMobile
          lineOne="MAKE IT"
          lineTwo="FISHEYE"
          img={FisheyeMobile}
        />

        <button
          id="creation-button"
          className="border border-black px-10 py-2 mt-6 text-lg tracking-[0.35em] hover:bg-black hover:text-white"
        >
          SEE ALL
        </button>
      </div>

      {/* Desktop Section */}
      <div className="hidden lg:flex lg:flex-col space-y-12 p-3 items-center justify-center mt-20 mb-64">
        <div className="flex items-center justify-around w-full">
          <h2 className="text-4xl ml-[3.75rem]">OUR CREATIONS</h2>
          <button
            id="creation-button"
            className="border border-black px-10 py-2 mr-[3.75rem] text-lg tracking-[0.35em] hover:bg-black hover:text-white"
          >
            SEE ALL
          </button>
        </div>

        <div className="flex">
          <CreationDesktop lineOne="DEEP" lineTwo="EARTH" img={EarthDesktop} />
          <CreationDesktop
            lineOne="NIGHT"
            lineTwo="ARCADE"
            img={NightArcadeDesktop}
          />
          <CreationDesktop
            lineOne="SOCCER"
            lineTwo="TEAM VR"
            img={SoccerDesktop}
          />
          <CreationDesktop lineOne="THE" lineTwo="GRID" img={GridDesktop} />
        </div>

        <div className="flex">
          <CreationDesktop
            lineOne="FROM UP"
            lineTwo="ABOVE VR"
            img={AboveDesktop}
          />
          <CreationDesktop
            lineOne="POCKET"
            lineTwo="BOREALIS"
            img={BorealisDesktop}
          />
          <CreationDesktop
            lineOne="THE"
            lineTwo="CURIOSITY"
            img={CuriosityDesktop}
          />
          <CreationDesktop
            lineOne="MAKE IT"
            lineTwo="FISHEYE"
            img={FisheyeDesktop}
          />
        </div>
      </div>
    </>
  );
}

export default Creations;
