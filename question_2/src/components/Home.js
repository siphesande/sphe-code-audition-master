import mobile from "../mobile.svg";

var Home = () => {
  return (
    <div className="flex font-inter sm:flex-row">
      <div className="flex flex-col w-1/2 pl-40">
        <div className="flex justify-start text-left items-start w-full text-black-700 font-bold text-8xl pl-0 pt-28 ml-0">
          <h1 className="extra-extra-loose">
            the <span className="underline">coolest</span> new app...
          </h1>
        </div>
        <br />
        <div className="flex flex-col justify-start w-88">
          <div className="flex pl-0">
            <p className="text-xl text-gray-700 font-bold pl-0 ml-0">
              Get notified when we go live
            </p>
          </div>
          <div className="mt-21 pt-3 mb-29">
            <input
              id="email-address"
              type="email"
              autocomplete="email"
              required
              className="appearance-none rounded-2xl relative block w-full px-3 py-5 pl-6 border border-gray-500 placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="your@cool.email"
            />
          </div>
          <br />
          <div className="mt-29">
            <a
              href="/#"
              className="flex justify-center bg-primary py-5 rounded-2xl text-center text-xl font-bold text-white  transition duration-300 ease-in-out mt-29"
            >
              Join Waitlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline ml-2 w-6 stroke-current text-white stroke-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center text-2xl w-1/2 pr-20">
        <div className="pt-28 w-full pb-48 mr-0 pr-0">
          <img src={mobile} className="mobile-svg" alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
