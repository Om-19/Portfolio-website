import memojiImage from "@/assets/images/memoji-computer.png"
import Arrow from "@/assets/icons/arrow-down.svg"
import Image from "next/image"
import grainImage from "@/assets/images/grain.jpg"
import StraIcon from "@/assets/icons/star.svg"
import { HEroOrbit } from "@/components/HeroOrbit"
import SparkleIcon from "@/assets/icons/sparkle.svg"

export const HeroSection = () => {
  return (
    <div className="py-12 md:py-30 lg:py-47 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent">
        <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage:`url(${grainImage.src})`
        }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HEroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-8 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-5 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={530} rotation={178} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-10 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-2 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={530} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="4s">
            <StraIcon className="size-12 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={550} rotation={20} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="4s">
            <StraIcon className="size-12 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-2 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-14 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="4s">
            <SparkleIcon className="size-3 text-emerald-300" />
        </HEroOrbit>
        <HEroOrbit size={880} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="4s">
          <StraIcon className="size-24 text-emerald-300" />
        </HEroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image 
          src={memojiImage}
          className="size-[100px]"
          alt="Person peeking from behhind"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative"><div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div></div>
            <div className="text-sm font-medium">
              Available for New Projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
          Om Patil
          <br />
          FullStack Web Devloper
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I am a skilled Full Stack Developer Specialised in <b>MERN</b> Stack. I am Specialsed in transforming Frontend 
          & Backend into functional, high-performing web applications
        </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <Arrow className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
};