import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center font-inter bg-gray-100 h-xxl px-12 sm:flex-row">
      <div className="flex justify-between items-center">
        <div className="flex font-bold text-3xl">
          <p>app.<span className="text-primary">me</span></p>
        </div>

        <div className="flex justify-between text-secondary text-2xl">
          <p className="pl-10">github</p>
          <p className="pl-4">twitter</p>
          <p className="pl-4">facebook</p>
        </div>
      </div>

      <div className="flex pr-8 justify-between text-secondary text-2xl">
        <p className="pl-4">privacy</p>
        <p className="pl-4">terms</p>
      </div>
    </footer>
  );
};

export default Footer;
