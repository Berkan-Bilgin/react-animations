import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Services from "@/components/Services";
import React from "react";


const images = [
  "/images/left monkey.png",
  "/images/right monkey.png",
 
];

export default function index() {
  return (
    <div>
      <Main  />
      <About  />     
      <Services />
      <Contact images={images} starCropWidth='50%' />
     
    </div>
  );
}