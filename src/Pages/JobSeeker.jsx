import Logo from "../Assests/jclogo.svg";
import Discord from "../Assests/discord-logo.png";
import Twitter from "../Assests/icons8-twitter.svg";
import Youtube from "../Assests/youtube-play .png";
import Info from "../Assests/info.png";
import Tiktok from "../Assests/tiktok.png";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import YoutubeWhite from "../Assests/youtube-play (2).png";

function JobSeeker() {
  return (
    <div className="w-full ">
      <div className="w-[80%] mx-auto">
        <div className="w-full mt-[1rem] lg:mt-[4rem] ">
          <a
            href="https://youtu.be/iW9EAOCsgJc"
            target="_blank"
            rel="noreferrer"
            className="justify-start md:justify-end text-left flex items-center
             mr-[12rem] cursor-pointer"
          >
            <img src={YoutubeWhite} alt="icon" className="w-6 mr-3" />
            <p className="text-xl md:text-2xl">How to use JobCrypt</p>
          </a>
          <div className="flex  justify-start md:justify-end mt-2 item items-center mr-2 md:mr-[10rem]">
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
        <div className="flex justify-between flex-wrap mt-4">
          <div className="flex justify-between w-[90%] md:w-[60%]   items-center">
            <NavLink to="/home" className="">
              <img src={Logo} alt="logo" className="w-16 object-contain" />{" "}
              <h5 className="font-semibold text-[1.2rem] text-center">
                Job Crypt
              </h5>
            </NavLink>

            <div className="flex justify-between w-[75%] items-center">
              <div className="text-center ">
                <a
                  href="/"
                  className="bg-[#353535] rounded-[25px] text-2xl px-4 py-2 text-white font-extrabold"
                >
                  Search Jobs
                </a>
              </div>
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
              <NavLink
                to="/employer_dashboard"
                className="text-[1.3rem] cursor-pointer"
              >
                {" "}
                Employer Dashboard{" "}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mt-[18rem] mb-[12rem]">
          <div className="border-[2px] text-center border-[#ebebeb] rounded-md mt-[1rem] w-[90%]   py-[3rem] mx-auto">
            <h2 className="font-bold text-5xl mb-[2rem]">
              Your Latest Job Applications
            </h2>
            <p className="font-bold ">
              Application Date Title Link Other Applicants Status
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default JobSeeker;
