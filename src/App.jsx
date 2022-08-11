import Hero from "./components/Hero";
import InteractiveMobile from "./images/mobile/image-interactive.jpg";
import InteractiveDesktop from "./images/desktop/image-interactive.jpg";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />

      <div className="flex flex-col lg:flex-row items-center justify-center w-screen p-6 mt-16">
        <img className="lg:hidden" src={InteractiveMobile} alt="Interactive" />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:w-[62%] lg:items-end lg:-space-x-40 p-6">
          <img
            className="hidden lg:inline-block"
            src={InteractiveDesktop}
            alt="Interactive"
          />
          <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center lg:pt-14 lg:pr-4 lg:pl-[6.5rem] bg-white">
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-center lg:text-left text-[2rem] lg:text-[2.75rem] leading-none mt-10 mb-6">
                  THE LEADER IN INTERACTIVE VR
                </h2>
                <p className="w-[75%] lg:w-full text-center lg:text-left">
                  Founded in 2011, Loopstudios has been producing world-class
                  virtual reality projects for some of the best companies around
                  the globe. Our award-winning creations have transformed
                  <br className="hidden lg:inline" />
                  businesses through digital experiences that bind to thier
                  brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Creations />

      <Footer />
    </div>
  );
}

export default App;
