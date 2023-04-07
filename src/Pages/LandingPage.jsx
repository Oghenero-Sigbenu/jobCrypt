import Logo from "../Assests/jclogo.svg";
import Discord from "../Assests/discord-logo.png";
import Twitter from "../Assests/icons8-twitter.svg";
import Youtube from "../Assests/youtube-play .png";
import Info from "../Assests/info.png";
import Tiktok from "../Assests/tiktok.png";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import YoutubeWhite from "../Assests/youtube-play (2).png";

function LandingPage() {
  return (
    <div className="w-full ">
      <div className="w-[80%] mx-auto">
        <div className="w-full mt-[4rem]">
          <a
            href="https://youtu.be/iW9EAOCsgJc"
            target="_blank"
            rel="noreferrer"
            className=" justify-end text-left flex items-center mr-[12rem] cursor-pointer"
          >
            <img src={YoutubeWhite} alt="icon" className="w-6 mr-3" />
            <p className="text-2xl">How to use JobCrypt</p>
          </a>
          <div className="flex justify-end mt-2 item items-center mr-[10rem]">
            <a
              className=""
              href="https://help.optimism.io/hc/en-us/articles/4411903123483-Connecting-your-wallet-to-Optimism"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Info} alt="icon" className="w-6 mr-3" />
            </a>
            <span className="bg-[#353535] text-white font-bold rounded-[15px] p-1">
              Click here to install MetaMask!
            </span>
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex justify-between w-[90%] md:w-[50%]  items-center">
            <NavLink to="/home" className="">
              <img src={Logo} alt="logo" className="w-16 object-contain" />{" "}
              <h5 className="font-semibold text-[1.2rem] text-center">
                Job Crypt
              </h5>
            </NavLink>
            <div className="flex justify-between w-[60%] items-center">
              <a
                href="https://www.twitter.com/JobCrypt"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="icon" className="w-6" />
              </a>
              <a
                href="https://discord.gg/JgBEEtaSmD"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Discord} alt="icon" className="w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@jobcrypt"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Tiktok} alt="icon" className="w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCEX4iMGm6HXD9kP5MiEieAQ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Youtube} alt="icon" className="w-6" />
              </a>
            </div>
          </div>
          <div className="border-[2px]  rounded-sm mt-[1rem] w-[90%] md:w-[35%] border-[#ebebeb] px-[2rem] pt-[6rem] pb-[2rem]">
            <p className="font-bold text-center">Select Dashboard</p>
            <div className="flex justify-center mt-3">
              <p className="text-[.8rem] md:text-[1.3rem]">Need Crypto?</p>
              <p className="text-red-500 text-[.8rem] md:text-[1.3rem]">
                TEST NET USE FAUCET!!
              </p>
            </div>
            <div className="flex justify-between w-[60%] mx-auto my-4 ">
              <button className="text-[1.3rem]">Employer</button>
              <button className="text-[1.3rem]">| Job Seeker</button>
            </div>
          </div>
        </div>
        <div className="mt-[18rem] mb-[12rem]">
          <div className="border-[2px] border-[#ebebeb] rounded-md mt-[1rem] w-[90%] md:w-[40%]   py-[3rem] mx-auto"></div>
          <div className="flex justify-center mt-2 text-center">
            <div className="w-[80%] lg:w-[40%] pt-[5rem]">
              <div className="border-[2px] border-[#ebebeb] rounded-md p-[3rem] mr-1 ">
                <h4 className="font-bold text-2xl">About the Role</h4>
              </div>
            </div>
            <div className="w-[80%] lg:w-[30%] ">
              <div className="border-[2px] border-[#ebebeb] rounded-md pt-[5rem] pb-[3rem] mb-1">
                <h4 className="font-bold text-xl">Key Skills</h4>
                <div className="flex items-center justify-center mt-[3rem]">
                  {" "}
                  <img src={Youtube} alt="icon" className="w-6" />{" "}
                  <span>How to Apply with JobCrypt</span>
                </div>
              </div>
              <div className="border-[2px] border-[#ebebeb] rounded-md py-[4rem]">
                <h4 className="font-bold text-xl">Job Categories</h4>
              </div>
            </div>
          </div>
          <div className="text-center mt-[2rem]">
            <button className="bg-[#353535] rounded-[25px] text-2xl px-4 py-2 text-white font-extrabold">
              Back
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
