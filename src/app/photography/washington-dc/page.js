"use client";

import { useState, useEffect } from "react";

const slugToFetch = "washington-dc";

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

function App() {
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
    return "Loading...";
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
    </>
  );
}

export default App;
