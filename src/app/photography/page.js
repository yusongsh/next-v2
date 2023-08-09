import Image from "next/image";
import Link from "next/link";

import utah from "./assets/utah.jpg";
import drone from "./assets/fall-2020-3.jpg";
import lincoln from "./assets/Lincoln-Center-0628-28.jpg";
import yosemite from "./assets/Yosemite.jpg";
import deathvalley from "./assets/death-valley.jpg";
import nycI from "./assets/nyc-i.jpg";
import nycII from "./assets/nyc-ii.jpg";
import dc from "./assets/dc.jpg";
import mv from "./assets/monument.jpg";

export default function Photography() {
  return (
    <>
      <div>
        <div className="w-full grid grid-cols-8 border-b">
          <div className="col-span-8 xl:col-span-7 flex flex-col xl:flex-row justify-evenly h-auto w-full">
            <div className="flex justify-center items-center border-b xl:border-b-0 xl:border-r xl:h-full xl:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-shadow-custom font-bold p-8">
                Photography
              </h2>
            </div>
            <div className="flex justify-center items-center xl:h-full xl:w-1/2">
              <p className="text-sm md:text-base lg:text-lg 2xl:text-2xl p-8">
                Capturing moments, framing stories. Dive into my lens&apos;s
                perspective and explore the world as I see it. Photography is
                where I get a lot of my inspirations from, allowing me to relax
                and unwind amidst the chaos of our world.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 border-b md:border-r h-[30rem] flex flex-col justify-between">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={utah}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <Link href="/photography/wild-west">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                  style={{ mixBlendMode: "difference" }}
                >
                  <p className=" text-white font-semibold uppercase text-center">
                    wild west
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 border-b lg:border-r h-[30rem]">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={lincoln}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <Link href="/photography/lincoln-center">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                  <p className="text-white font-semibold text-center uppercase">
                    Summer for the city
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 border-b md:border-r lg:border-r-0 h-[30rem] flex flex-col justify-between">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={yosemite}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <Link href="/photography/yosemite">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                  style={{ mixBlendMode: "difference" }}
                >
                  <p className="text-white font-semibold uppercase text-center">
                    Yosemite National Park
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 border-b lg:border-r h-[30rem]">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={deathvalley}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />{" "}
              <Link href="/photography/death-valley">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                  style={{ mixBlendMode: "difference" }}
                >
                  <p className=" text-white font-semibold uppercase text-center">
                    Death Valey
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 border-b md:border-r h-[30rem]">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={nycII}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <Link href="/photography/nyc-i">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                  style={{ mixBlendMode: "difference" }}
                >
                  <p className=" text-white font-semibold capitalize text-center">
                    NYC I
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 border-b h-[30rem]">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={nycI}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <Link href="/photography/nyc-ii">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                  style={{ mixBlendMode: "difference" }}
                >
                  <p className="text-white font-semibold capitalize text-center">
                    NYC II
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 border-b lg:border-b-0 md:border-r h-[30rem]">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={dc}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <Link href="/photography/washington-dc">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                  <p className="text-white font-semibold uppercase text-center">
                    Washington DC
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 h-[30rem] border-b lg:border-b-0 lg:border-r">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={mv}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
              {/* This is the overlay */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                style={{ mixBlendMode: "difference" }}
              >
                <p className=" text-white font-semibold uppercase text-center">
                  monument valley
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-[30rem] md:border-r lg:border-r-0">
            <div className="relative w-full h-full hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-300 group">
              <Image
                src={drone}
                alt="Picture of the basketball fun"
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10"
              />{" "}
              <Link href="/photography/archive">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition ease-in-out duration-300"></div>
                {/* This is the overlay */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
                  style={{ mixBlendMode: "difference" }}
                >
                  <p className=" text-white font-semibold uppercase text-center">
                    Archive I
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
