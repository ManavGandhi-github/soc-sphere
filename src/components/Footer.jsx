import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-center p-3 font-thin max-w-4xl md:text-sm text-xs mx-auto text-gray-700 w-full">
      <div className="px-3">
        <div className="w-full ">
          <div className="flex items-center flex-wrap justify-between w-full mb-3">
          </div>
        </div>
        <div className="text-sm">
          <div className="">
            <div className="">
              <span className="font-semibold">&copy; {date.getFullYear()}</span>{" "}
              Soc Space by{" "}
              <a
                target={"_blank"}
                rel="nofollow noopener noreferrer"
                className="font-semibold"
              >
                Manav Gandhi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
