import React from "react";
import { Navbar } from "./components/Navbar";
import { TimelineDemo } from "./components/TimelineDemo";
import { Logos3 } from "./components/logos3";
import TracksSlider from "./components/Tracks";
import LegoCarousel from "./components/3dCarousel";
import figurine from "/tracks.svg";
import { SparklesPreviewDark } from "./components/Sparkles";
import { SponsorCarousel } from "./components/SponsorCarousel";
import "./App.css";
import { motion } from "framer-motion";

import Footer from './components/Footer';
import Card from "./components/Spo";
import { Component } from "./components/faq";


function App() {
  return (
    <div id="home" className="min-h-screen relative bg-black overflow-x-hidden w-screen">
      {/* <div className="fixed bottom-0 left-0 w-screen h-screen z-10">
        <img src="/walking.gif" className="absolute w-64 h-64 -mb-15 bottom-0 left-0" />
      </div> */}
      <SparklesPreviewDark />
      <Navbar />

      {/* Rest of the Sections */}
      <div id="about" className="flex justify-center items-center w-full mt-16">
        <LegoCarousel />
      </div>
      <div id="timeline" className="w-full">
        <TimelineDemo />
      </div>

      {/* Tracks Section */}
      <div
        id="tracks"
        className="flex flex-col md:flex-row justify-between items-center mt-16 pt-16 px-4"
        style={{
          backgroundImage: "url(/lego-border.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-1/4 flex justify-center items-center mb-8 md:mb-0">
          <motion.div
            className="relative bg-gray-900 dark:bg-gray-800 rounded-lg p-6 pb-0 border-2 border-yellow-500 dark:border-yellow-600"
            style={{
              boxShadow: "0 8px 0 rgba(234, 179, 8, 0.5)",
              backgroundImage: "radial-gradient(circle at 10px 10px, rgba(234, 179, 8, 0.15) 3px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 mx-1 rounded-full bg-yellow-500 dark:bg-yellow-600 border border-yellow-600 dark:border-yellow-700"
                ></div>
              ))}
            </div>
            <img src={figurine || "/placeholder.svg"} alt="LEGO figurine" className="w-full rotate-y-180" />
          </motion.div>
        </div>

        <div className="w-full md:w-3/4 mt-8 md:mt-0 md:ml-6">
          <motion.div
            className="bg-gray-900 dark:bg-gray-800 rounded-lg border-2 border-blue-500 dark:border-blue-600 overflow-hidden"
            style={{
              boxShadow: "0 8px 0 rgba(59, 130, 246, 0.5)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Hackathon Tracks</h2>
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-4 h-4 mx-1 rounded-full bg-yellow-500 dark:bg-yellow-600"></div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <TracksSlider />
            </div>
          </motion.div>
        </div>
      </div>
      {/* <Card /> */}
      {/* Partners Section */}
      <div className="min-h-screen bg-black">
        {/* Sponsors Section */}
        <section className="relative z-10">
          <SponsorCarousel />
        </section>
      </div>
      <div className="">
        <Component />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}


export default App;