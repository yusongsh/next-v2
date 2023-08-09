"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const slugToFetch = "nyc-ii";

const query = `
{
  photoGalleryCollection(where: {slug: "${slugToFetch}"}, limit: 1) {
    items {
			title
      intro
      slug
      imagesCollection {
        items {
          url
        }
        }
      }  
    }
}
`;

function Page() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data);
      });
  }, []);

  if (!page) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  const images = page.photoGalleryCollection.items[0].imagesCollection.items;
  const title = page.photoGalleryCollection.items[0].title;
  const intro = page.photoGalleryCollection.items[0].intro;

  console.log("can you see", page, images);

  // render the fetched Contentful data
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12 md:py-20 lg:py-32 border-b">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase text-shadow-custom font-bold pb-8">
          {title}
        </h3>
        <p className="max-w-2xl text-center px-8 text-sm md:text-base">
          {intro}
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-3xl mx-auto gap-4 px-6 py-12 md:py-20 lg:py-32">
        {images.map((image, index) => (
          <div key={index} className="relative h-auto">
            <img
              src={image.url}
              alt={`Photo ${index + 1}`}
              className="w-full max-w-2xl h-auto"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row justify-between p-4 lg:p-8 border-t">
        <div className="">
          {" "}
          <Link href="/photography/nyc-i" className="flex flex-col lg:gap-2">
            <span className="uppercase font-light text-xs lg:text-sm">
              Prev
            </span>
            <span className="text-lg lg:text-2xl">NYC I</span>
          </Link>
        </div>
        <div>
          <Link
            href="/photography/archive"
            className="flex flex-col items-end lg:gap-2"
          >
            <span className="uppercase font-light text-xs lg:text-sm">
              next
            </span>
            <span className="text-lg lg:text-2xl">Archive I</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
