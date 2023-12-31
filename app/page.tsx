import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Faizi Fifita
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 mx-20 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hey there, welcome to my website. My name is Faizi and I'm a
          full-stack software developer with experience in developing and
          shipping large scale AI SAAS products.
          <br />
          Over the last year I co-founded and have been building{" "}
          <Link
            target="_blank"
            href="https://www.captionit.ai"
            className="underline duration-500 hover:text-zinc-300"
          >
            captionit.ai
          </Link>
          , along with various other tech interestes such as full stack AI
          Chatbots, web scrapers, process automation with AI, and occasionally
          making{" "}
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UC4V-TeaHHHkdcJAkU3SsmTQ"
            className="underline duration-500 hover:text-zinc-300"
          >
            educational content
          </Link>{" "}
          for other software developers on Youtube.
        </h2>
        <div className="text-sm text-zinc-500 mt-5">
          The following awesome open source Next.js{" "}
          <Link
            target="_blank"
            href="https://github.com/chronark/chronark.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            project
          </Link>{" "}
          was the foundation for this website.
        </div>
      </div>
    </div>
  );
}
