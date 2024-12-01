import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Star from "@/assets/icons/star.svg"
import Book from "@/assets/images/book-cover.png"
import Image from "next/image";
import Javascripticon from '@/assets/icons/square-js.svg'
import HTML5icon from '@/assets/icons/html5.svg'
import CSSicon from '@/assets/icons/css3.svg'
import Reacticon from '@/assets/icons/react.svg'
import Chromeicon from '@/assets/icons/chrome.svg'
import Githubicon from '@/assets/icons/github.svg'
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/map2.png"
import Smile from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { Toolbox } from "@/components/Toolbox";
import { title } from "process";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: Javascripticon,
  },
  {
    title: "HTML5",
    iconType: HTML5icon,
  },
  {
    title: "CSS",
    iconType: CSSicon,
  },
  {
    title: "React",
    iconType: Reacticon,
  },
  {
    title: "chrome",
    iconType: Chromeicon,
  },
  {
    title: "Github",
    iconType: Githubicon,
  }
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: "5%",
    top: "5%",
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: "50%",
    top: "5%",
  },
  {
    title: 'Hiking',
    emoji: '🧗‍♂',
    left: "35%",
    top: "40%",
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "10%",
    top: "35%",
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: "70%",
    top: "45%", 
  },
  {
    title: 'Fitness',
    emoji: '🏋‍♂',
    left: "27%",
    top: "65 %",
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "45%",
    top: "70%",
  }
]

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my World"
          description="Learn more about me, who I am, what I do & what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader 
                title="My Reads"
                description="Explore the Books Shaping my perspectives. I used to craft exceptional Experience"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={Book} alt="Book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader 
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to create digital Experience"
                  className=""
                />
                <div className="lg:pt-5">
                  <Toolbox items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
                  <Toolbox 
                  items={toolboxItems} 
                  className="mt-6" 
                  itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                  />
                </div>
            </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Beyond The Code"
                description="Explore the my Interest and Hobbies beyond the digital realm"
                className="px-6 pt-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div 
                    key={hobby.title}
                    className=" inline-flex items-center
                    gap-2 px-6 bg-gradient-to-r
                    from-emerald-300 to-sky-400
                    rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    >
                    <span className="font-medium text-gray-900">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2 lg:col-span-1">
              <Image 
                src={MapImage} 
                alt="map" 
                className="h-full w-full object-cover object-left-top"
                />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2
              -translate-y-1/2 size-20 rounded-full after:content-['']
              after:absolute after:inset-0 after:outline after:outline-2
              after-outline-offset-2 after:rounded-full
              after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full
                bg-gradient-to-r from-emerald-300 to-sky-400 -z-10
                animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full
                bg-gradient-to-r from-emerald-300 to-sky-400 -z-20
                animate-ping [animation-duration:2s]"></div>
                <Image src={Smile} alt="smile-emoji" className="size-20" />
              </div>
            </Card>
            </div>
        </div>
      </div>
    </div>
  );
};
