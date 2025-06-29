import React from "react";
import { Link } from "react-router-dom";
import Logo from "../formItem/Logo";

function Footer() {
  return (
    // <section className="relative b-0 overflow-hidden py-10 bg-[#0f172b] text-gray-100">
    //   <div className="relative z-10 mx-auto max-w-7xl px-4">
    //     <div className="-m-6 flex flex-wrap">
    //       <div className="w-full p-6 md:w-1/2 lg:w-5/12">
    //         <div className="flex h-full flex-col justify-between">
    //           <div className="mb-4 inline-flex items-center">
    //             <Logo width="100px" />
    //           </div>
    //           <div>
    //             <p className="text-sm text-gray-600">
    //               &copy; Copyright 2025, by Aniket Kole
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //         <div className="h-full">
    //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
    //             Company
    //           </h3>
    //           <ul>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Features
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Pricing
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Affiliate Program
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Press Kit
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //         <div className="h-full">
    //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
    //             Support
    //           </h3>
    //           <ul>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500 hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Account
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Help
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Contact Us
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Customer Support
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="w-full p-6 md:w-1/2 lg:w-3/12">
    //         <div className="h-full">
    //           <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
    //             Legals
    //           </h3>
    //           <ul>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Terms &amp; Conditions
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Privacy Policy
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className=" text-base font-medium text-gray-500  hover:text-gray-200 hover:duration-200"
    //                 to="/"
    //               >
    //                 Licensing
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    <footer className="footer sm:footer-horizontal bg-[#0f172b] text-base-content p-10 bg-fixed">
      <aside>
        <Logo />
        <p className="text-sm text-gray-300 mt-8">
          &copy; Copyright 2025, by Aniket Kole
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>

  );
}

export default Footer;
