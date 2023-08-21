"use client";
import { useState } from "react";
import profile from "./images/crypto.jpg";
import basket from "./images/NBA 75.gif";
import mapFun from "./images/mapfun.gif";
import codr from "./images/Codr..png";
import lushful from "./images/lushful-asset.jpg";
import myportfolio from "./images/myportfolio.jpg";
import cascade from "./images/Cascade.jpg";
import Image from "next/image";
import kura from "./images/Kura-Main-Final.jpg";
import bike from "./images/Bike-NYC-bg.jpg";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const initialState = {
    openCrypto: false,
    openBasket: false,
    openCodr: false,
    openLush: false,
    openYs: false,
    openCas: false,
    openKura: false,
    openBike: false,
    openWorldFun: false,
  };

  const [state, setState] = useState(initialState);

  const toggle = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("jackshi.sys@gmail.com");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <div className="border-b">
        <h3 className="px-3 py-8 lg:py-12 2xl:py-16 sm:px-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-shadow-custom">
          A Front-End Engineer and digital Product Designer with a focus on user
          centered experience develop. Rooted in NYC, serving clients across the
          country. Actively pursuing a new career direction.
        </h3>
      </div>
      <div className="border-b">
        <h3 className="text-right px-3 sm:px-6 py-4 lg:py-6 2xl:py-8 text-xs md:text-base lg:text-base 2xl:text-lg">
          AVAILABLE FOR COLLABORATIONS. HAPPY TO DISCUSS YOUR PROJECT,{" "}
          <button
            onClick={copyToClipboard}
            className="underline underline-offset-2"
          >
            {!copied ? (
              <span>Let&apos;s Talk!</span>
            ) : (
              <span> Email Address copied!</span>
            )}
          </button>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* project 1 */}
        <div className="col-span-1 border-b md:border-r h-[30rem] flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openYs ? (
              <a onClick={() => toggle("openYs")} className="cursor-pointer">
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      A web developer and digital product designer with a focus
                      on user-centered experience develop. Rooted in NYC,
                      serving clients across the country. Actively pursuing a
                      new career direction.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">role</h5>
                    <div>
                      <p className="text-sm">Developer</p>
                      <p className="text-sm">Product Designer</p>
                    </div>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                      <li className="px-3 py-1 border rounded-full">NextJS</li>
                      <li className="px-3 py-1 border rounded-full">
                        TailwindCSS
                      </li>
                      <li className="px-3 py-1 border rounded-full">Netlify</li>
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <a onClick={() => toggle("openYs")} className="cursor-pointer">
                <Image
                  src={myportfolio}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  className="p-10"
                />
              </a>
            )}
          </div>

          <div
            className={
              state.openYs
                ? "border-t py-4 text-center bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openYs ? (
              <span>
                <a
                  href=""
                  className="underline underline-offset-4 cursor-alias"
                >
                  View Live Site
                </a>
              </span>
            ) : (
              <span>My Portfolio</span>
            )}
          </div>
        </div>
        {/* project 2 */}
        <div className="col-span-1 border-b lg:border-r h-[30rem] flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openKura ? (
              <a onClick={() => toggle("openKura")} className="cursor-pointer">
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      Kura&apos;s app, while intended to enhance customer
                      experience, often proves problematic due to misguided
                      gestures, unclear hierarchy, and outdated design,
                      necessitating thoughtful redesign for a more user-friendly
                      and enjoyable experience.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">type</h5>
                    <div>
                      <p className="text-sm">UI / UX</p>
                      <p className="text-sm">Mobile Application</p>
                    </div>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                      <li className="px-3 py-1 border rounded-full">
                        Adobe Photoshop
                      </li>
                      <li className="px-3 py-1 border rounded-full">
                        Product Design
                      </li>
                      <li className="px-3 py-1 border rounded-full">
                        Mobile Design
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <a onClick={() => toggle("openKura")} className="cursor-pointer">
                <Image
                  src={kura}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  className="p-10"
                />
              </a>
            )}
          </div>

          <div
            className={
              state.openKura
                ? "border-t py-4 text-center bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openKura ? (
              <span>
                <a
                  href="#"
                  className="underline underline-offset-4 cursor-alias"
                >
                  View Case Study
                </a>
              </span>
            ) : (
              <span>KURA REDESIGN</span>
            )}
          </div>
        </div>
        {/* project 3 */}
        <div className="col-span-1 border-b md:border-r lg:border-r-0 h-[30rem] flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openLush ? (
              <a onClick={() => toggle("openLush")} className="cursor-pointer">
                <div className="p-6 flex flex-col gap-6 h-[26rem] overflow-auto">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      Lushful Aesthetics is a MedSpa built on the founding
                      principle that lifestyle dictates beauty and not the other
                      way around. Founded by Dr. Chris Bustamante, DNP, NP-C
                      (@InjectorChris), a doctorate prepared Aesthetic Nurse
                      Practitioner.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">role</h5>
                    <div>
                      <p className="text-sm">Frontend Developer</p>
                      <p className="text-sm">Product Designer</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">
                      COLLABORATORS
                    </h5>
                    <p className="underline underline-offset-4 text-sm">
                      <a
                        href="https://www.linkedin.com/in/knnyczr/"
                        target="_blank"
                      >
                        {" "}
                        Kenny Kruz
                      </a>
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                      <li className="px-3 py-1 border rounded-full">
                        GastbyJS
                      </li>
                      <li className="px-3 py-1 border rounded-full">
                        TailwindCSS
                      </li>
                      <li className="px-3 py-1 border rounded-full">
                        ContentfulCMS
                      </li>
                      <li className="px-3 py-1 border rounded-full">Netlify</li>
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <button onClick={() => toggle("openLush")}>
                <Image
                  src={lushful}
                  // blurDataURL={basketholder}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  // placeholder="blur"
                  className="p-10"
                />
              </button>
            )}
          </div>

          <div
            className={
              state.openLush
                ? "border-t py-4 text-center bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openLush ? (
              <span>
                {" "}
                <a
                  href="https://www.lushfulaesthetics.com/"
                  target="_blank"
                  className="underline underline-offset-4 cursor-alias"
                >
                  View Live Site
                </a>
              </span>
            ) : (
              <span>Lushful Aesthetics</span>
            )}
          </div>
        </div>
        {/* project 4 */}
        <div className="col-span-1 border-b  lg:border-r h-[30rem]  flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openBike ? (
              <a onClick={() => toggle("openBike")} className="cursor-pointer">
                <div className="p-6 flex flex-col gap-6 h-[26rem] overflow-auto">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      Cycle NYC is a comprehensive online platform dedicated to
                      the vibrant community of cyclists in New York City. The
                      platform serves as a one-stop hub, offering users the
                      ability to explore various biking trails throughout the
                      city, check real-time weather and traffic information, and
                      plan their biking trips. In addition to these, Cycle NYC
                      also features recommended bikes for purchase and offers
                      lessons for both novice and seasoned bikers. Users can
                      create personalized accounts to save their favorite trails
                      and create customized plans for their biking journeys.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">role</h5>
                    <div>
                      <p className="text-sm">Software Engineer</p>
                      <p className="text-sm">UI / UX Designer</p>
                    </div>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                      <li className="px-3 py-1 border rounded-full">React</li>
                      <li className="px-3 py-1 border rounded-full">CSS</li>
                      <li className="px-3 py-1 border rounded-full">
                        Responsive Design
                      </li>
                      <li className="px-3 py-1 border rounded-full">Python</li>
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <a onClick={() => toggle("openBike")} className="cursor-pointer">
                <Image
                  src={bike}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  className="p-10"
                />
              </a>
            )}
          </div>

          <div
            className={
              state.openBike
                ? "border-t py-4 text-center bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openBike ? (
              <span>
                <a
                  href="https://nyc-bike-222.netlify.app/"
                  className="underline underline-offset-4 cursor-alias"
                >
                  View Case Study
                </a>
              </span>
            ) : (
              <span>BikeNYC</span>
            )}
          </div>
        </div>
        {/* project 5 */}
        <div className="col-span-1 md:border-r border-b h-[30rem] flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openCas ? (
              <a onClick={() => toggle("openCas")} className="cursor-pointer">
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      I developed a responsive website for Cascade Spa in San
                      Diego, emphasizing speed and user experience. By
                      incorporating intuitive navigation and a streamlined
                      booking system, I ensured their clients could access
                      services efficiently, mirroring the high-quality in-spa
                      experience they offer.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-4 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">
                        GastbyJS
                      </li>
                      <li className="px-3 py-1 border rounded-full">
                        ContentfulCMS
                      </li>
                      <li className="px-3 py-1 border rounded-full">
                        TailwindCSS
                      </li>
                      <li className="px-3 py-1 border rounded-full">Netlify</li>
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <a onClick={() => toggle("openCas")} className="cursor-pointer">
                <Image
                  src={cascade}
                  // blurDataURL={basketholder}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  // placeholder="blur"
                  className="p-10"
                />{" "}
              </a>
            )}
          </div>
          <div
            className={
              state.openCas
                ? "border-t py-4 text-center  bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openCas ? (
              <span>
                {" "}
                <a
                  href="https://www.cascadethespa.com/"
                  target="_blank"
                  className="underline underline-offset-4 cursor-alias"
                >
                  View Live Site
                </a>
              </span>
            ) : (
              <span>Cascade Spa</span>
            )}
          </div>
        </div>
        {/* project 6 */}
        <div className="col-span-1 h-[30rem] flex border-b flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openWorldFun ? (
              <a
                onClick={() => toggle("openWorldFun")}
                className="cursor-pointer"
              >
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      COUNTRYFUN.WORLD is more than just a mapping
                      tool.It&apos;s a voyage into the diverse and expansive
                      world of nations. Built with travelers, researchers,
                      students, and curious minds in mind. Did you know there
                      are 195 countries in the world today?
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">Role</h5>
                    <div>
                      <p className="text-sm">Frontend Developer</p>
                      <p className="text-sm">Web Designer</p>
                    </div>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">NextJS</li>
                      <li className="px-3 py-1 border rounded-full">
                        TailwindCSS
                      </li>
                      <li className="px-3 py-1 border rounded-full">Vercel</li>
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                    </ul>
                  </div>
                  {/* <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">Github</h5>
                    <p className="text-sm underline underline-offset-4">
                      <a
                        href="https://github.com/yusongsh/Project-2"
                        target="_blank"
                      >
                        source code
                      </a>
                    </p>
                  </div> */}
                </div>
              </a>
            ) : (
              <button
                onClick={() => toggle("openWorldFun")}
                className="cursor-pointer"
              >
                <Image
                  src={mapFun}
                  // blurDataURL={basketholder}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  // placeholder="blur"
                  className="p-10"
                />{" "}
              </button>
            )}
          </div>

          <div
            className={
              state.openWorldFun
                ? "border-t py-4 text-center bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openWorldFun ? (
              <a
                href="https://www.countryfun.world/"
                target="_blank"
                className=" underline underline-offset-4 cursor-alias"
              >
                <span> View Live Site</span>{" "}
              </a>
            ) : (
              <span>countryfun.world</span>
            )}
          </div>
        </div>
        {/* project 7*/}
        <div className="col-span-1 h-[30rem] border-b lg:border-b-0 md:border-r flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openCodr ? (
              <a onClick={() => toggle("openCodr")} className="cursor-pointer">
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      We’re on a mission to build the world’s best community for
                      developers to share, grow, and get hired.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">role</h5>
                    <div>
                      <p className="text-sm">Software Engineer</p>
                      <p className="text-sm">Lead Designer</p>
                    </div>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                      <li className="px-3 py-1 border rounded-full">
                        Javascript
                      </li>
                      <li className="px-3 py-1 border rounded-full">SCSS</li>
                      <li className="px-3 py-1 border rounded-full">React</li>
                      <li className="px-3 py-1 border rounded-full">Express</li>
                      <li className="px-3 py-1 border rounded-full">
                        PostgreSQL
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </a>
            ) : (
              <button onClick={() => toggle("openCodr")}>
                <Image
                  src={codr}
                  // blurDataURL={basketholder}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  // placeholder="blur"
                  className="p-10"
                />{" "}
              </button>
            )}
          </div>

          <div
            className={
              state.openCodr
                ? "border-t py-4 text-center bg-[#445F69]/50 "
                : "border-t py-4 text-center"
            }
          >
            {state.openCodr ? (
              <a
                href="https://ga-222-codr.netlify.app/"
                target="_blank"
                className="underline underline-offset-4 cursor-alias"
              >
                <span> View Live Site</span>
              </a>
            ) : (
              <span>Codr.</span>
            )}
          </div>
        </div>
        {/* project 8*/}
        <div className="col-span-1 h-[30rem] border-b lg:border-b-0 md:border-r flex flex-col justify-between">
          <div className="relative w-full h-full">
            {state.openBasket ? (
              <a
                onClick={() => toggle("openBasket")}
                className="cursor-pointer"
              >
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      NBA 75 Fun Zone, a dynamic platform celebrating the
                      league&apos;s iconic 75th anniversary team. Dive into
                      thrilling experiences and engage with the legendary
                      players that have shaped the NBA&apos;s legacy. Featuring
                      immersive games, trivia, and challenges, this platform
                      lets fans relive the moments that made basketball history.
                    </p>
                  </div>
                  <div className="container flex flex-col gap-4">
                    <ul className="text-sm flex flex-row flex-wrap gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">Figma</li>
                      <li className="px-3 py-1 border rounded-full">
                        Javascript
                      </li>
                      <li className="px-3 py-1 border rounded-full">CSS</li>
                      <li className="px-3 py-1 border rounded-full">MongoDB</li>
                      <li className="px-3 py-1 border rounded-full">Express</li>
                      <li className="px-3 py-1 border rounded-full">Node</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">Github</h5>
                    <p className="text-sm underline underline-offset-4">
                      <a
                        href="https://github.com/yusongsh/Project-2"
                        target="_blank"
                      >
                        source code
                      </a>
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <button
                onClick={() => toggle("openBasket")}
                className="cursor-pointer"
              >
                <Image
                  src={basket}
                  // blurDataURL={basketholder}
                  alt="Picture of the basketball fun"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  // placeholder="blur"
                  className="p-10"
                />{" "}
              </button>
            )}
          </div>

          <div
            className={
              state.openBasket
                ? "border-t py-4 text-center bg-[#445F69]/50"
                : "border-t py-4 text-center"
            }
          >
            {state.openBasket ? (
              <a
                href="https://nba-75-anni.netlify.app/"
                target="_blank"
                className=" underline underline-offset-4 cursor-alias"
              >
                <span> View Live Site</span>{" "}
              </a>
            ) : (
              <span>Basketball.fun</span>
            )}
          </div>
        </div>
        {/* project 9*/}
        <div className="col-span-1 h-[30rem] md:border-r flex flex-col justify-between">
          <div className="relative h-full">
            {state.openCrypto ? (
              <a
                onClick={() => toggle("openCrypto")}
                className="cursor-pointer"
              >
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">About</h5>
                    <p className="text-sm">
                      Crypto tracking platform that offers real-time price
                      updates across diverse digital currencies. With an
                      advanced search function, allowing users to effortlessly
                      discover and delve into both mainstream and lesser-known
                      cryptocurrencies.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold uppercase">Time</h5>
                    <p className="text-sm">2 day hackathon, 2021</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <ul className="text-sm flex flex-row gap-x-3 gap-y-2">
                      <li className="px-3 py-1 border rounded-full">
                        Adobe XD
                      </li>
                      <li className="px-3 py-1 border rounded-full">React</li>
                      <li className="px-3 py-1 border rounded-full">CSS3</li>
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <button onClick={() => toggle("openCrypto")}>
                <Image
                  src={profile}
                  alt="Picture of the crypto"
                  fill={true}
                  style={{ objectFit: "contain" }}
                  placeholder="blur"
                  className="p-10"
                />{" "}
              </button>
            )}
          </div>

          <div
            className={
              state.openCrypto
                ? "border-t py-4 text-center bg-[#445F69]/50 s"
                : "border-t py-4 text-center"
            }
          >
            {state.openCrypto ? (
              <a
                href="https://startling-crypto.netlify.app/"
                target="_blank"
                className="underline underline-offset-4 cursor-alias"
              >
                {" "}
                <span> View Live Site</span>
              </a>
            ) : (
              <span>Startling Crypto</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
