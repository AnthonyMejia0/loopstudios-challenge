import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row space-y-10 pt-20 lg:pt-4 pb-20 lg:pb-4 2xl:px-48 items-center lg:items-end justify-center lg:justify-around bg-black">
      <div className="flex flex-col space-y-10 lg:space-y-5">
        <img className="lg:w-40" src={Logo} alt="Loopstudios Logo" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-start space-y-6 lg:space-y-0 lg:space-x-8 text-white text-center">
          <h5 className="hover:underline underline-offset-8 cursor-pointer">
            About
          </h5>
          <h5 className="hover:underline underline-offset-8 cursor-pointer">
            Careers
          </h5>
          <h5 className="hover:underline underline-offset-8 cursor-pointer">
            Events
          </h5>
          <h5 className="hover:underline underline-offset-8 cursor-pointer">
            Products
          </h5>
          <h5 className="hover:underline underline-offset-8 cursor-pointer">
            Support
          </h5>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-end space-y-6">
        <div className="flex space-x-8 lg:space-x-5 pt-6">
          <img src={Facebook} alt="Facebook Logo" />
          <img src={Twitter} alt="Twitter Logo" />
          <img src={Pinterest} alt="Pinterest Logo" />
          <img src={Instagram} alt="Instagram Logo" />
        </div>

        <p className="text-[#696969] text-lg">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
