import Logo from "../Assests/jclogo.svg";
import Discord from "../Assests/discord-logo.png";
import Twitter from "../Assests/icons8-twitter.svg";
import Youtube from "../Assests/youtube-play .png";
import YoutubeWhite from "../Assests/youtube-play (2).png";
import Info from "../Assests/info.png";
import Browser from "../Assests/3000.png";
import Filecoin from "../Assests/filecoin.png";
import Tiktok from "../Assests/tiktok.png";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="  ">
      <div className="w-[80%] mx-auto">
        <div className="w-full mt-[4rem]">
          <a
            href="https://youtu.be/iW9EAOCsgJc"
            target="_blank"
            rel="noreferrer"
            className=" justify-start flex items-center ml-5 md:ml-[13rem] cursor-pointer"
          >
            <span className=" ">
              <img src={YoutubeWhite} alt="icon" className="w-6 mr-3" />
            </span>
            <p className="text-xl md:text-2xl">How to use JobCrypt</p>
          </a>
          <div className="flex flex-wrap justify-start mt-2 item ml-5 md:ml-[13rem] items-center">
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
            <div className="flex justify-center ml-3">
              <p className="text-[.8rem] md:text-[1.3rem]">Need Crypto?</p>
              <p className="text-red-500 text-[.8rem] md:text-[1.3rem]">
                TEST NET USE FAUCET!!
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between  w-[90%]   mt-[1rem]  items-center">
            <a href="/home" className="">
              <img src={Logo} alt="logo" className="w-16 object-contain mt-4" />{" "}
              <h5 className="font-semibold text-[.7rem] md:text-[1.2rem] text-center">
                Job Crypt
              </h5>
            </a>
            <div className="text-center mx-1 md:ml-[4rem]">
              <button className="bg-[#353535] rounded-[25px] text-[.8rem] md:text-2xl px-4 py-2 text-white font-extrabold">
                Back
              </button>
            </div>
            <div className="flex justify-between w-[70%] items-center">
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
          <div className="flex justify-start md:w-[40%] lg:w-[20%] mt-4 ">
            <NavLink to="/employer_dashboard" className="text-[1.3rem] mr-2">
              Employer{" "}
            </NavLink>
            <NavLink to="/job_seeker_dashboard" className="text-[1.3rem]">
              | Job Seeker
            </NavLink>
          </div>
        </div>
        <div className="my-[7rem]">
          <h4 className="font-bold text-xl">
            Connect Web 3 to view the latest jobs!!
          </h4>
        </div>
        <div className="flex w-[80%] flex-wrap  justify-between mb-[8rem] mt-[12rem] ">
          <div>
            <a
              className="font-bold text-xl "
              target="_blank"
              href="https://hackathons.filecoin.io/2021/browsers3000/"
              rel="noreferrer"
            >
              Winner Browsers 3000 - Filecoin Prize
            </a>
          </div>
          {/* <div className=""> */}
          <img src={Browser} alt="hackathon" className="w-[200px] mr-2" />
          {/* </div> */}
          <div>
            <a
              target="_blank"
              href="https://grants.filecoin.io/"
              rel="noreferrer"
              className="font-bold text-xl "
            >
              Filecoin Next Steps Micro Grant - Awardee 2021
            </a>
          </div>
          <a
            className="w-[300px] "
            target="_blank"
            href="https://grants.filecoin.io/"
            rel="noreferrer"
          >
            <img src={Filecoin} alt="hackathon" className=" w-[100%] ml-2" />
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
