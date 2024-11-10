"use client"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/navbar";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (()=>{
    AOS.init({
      easing: "ease-in-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement: "bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  },[]);
  
  
  return (
  <div >
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>
    

  
</div>
  
  );
}
