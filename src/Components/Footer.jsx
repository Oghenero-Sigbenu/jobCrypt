function Footer() {
  return (
    <div className=" ">
      <div className="text-center mb-[5rem]">
        <h2 className="text-5xl font-extrabold text-[#353535]">
          Ready to start?
        </h2>
        <h4 className="text-3xl mt-5 text-[#353535] font-normal">
          Get the latest jobs direct to your inbox
        </h4>
        <div>
          <form className=" w-[80%] md:w-[60%] mx-auto my-[3rem]">
            <p className=" text-right">
              <span className="text-red-500">*</span> indicates required
            </p>
            <div className="text-left">
              <label className="text-left">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                name="email"
                className="bg-[#ebebeb] border-[1px] rounded-[3px] w-full p-3 border-[#ABB0B2] "
                placeholder="enter your email ..."
              />
            </div>
            <button className="bg-[#353535] mt-[3rem] rounded-[25px] text-2xl px-4 py-3 w-[80%] text-white font-extrabold">
              Join Alert List
            </button>
          </form>
        </div>
        <div className=" flex  flex-wrap justify-between mt-[12rem]">
          <div className="w-[80%] lg:w-[50%]">
            <p className="w-[60%] mb-8 lg:w-[30%] text-left text-[#aeaeae] text-xl">
              © 2022 Job Crypt Framework by{" "}
              <strong className="text-[#353535] font-normal">Uisual</strong>{" "}
              Powered By{" "}
              <strong className="text-[#353535] font-normal">
                Open Block EI
              </strong>
            </p>
          </div>
          <div className="w-[80%] lg:w-[30%] text-right flex flex-end ">
            <ul className=" text-[#353535] flex flex-end">
              <li className="mr-3">about | </li>
              <li className="mr-3">terms | </li>
              <li className="mr-3">privacy policy | </li>
              <li className="mr-3">cookie policy </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
