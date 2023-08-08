"use client";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("jackshi.sys@gmail.com");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <footer className=" text-sm box-border bg-[#080808] w-screen border-t-[1px] border-[#CCCFCA]">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <div className="p-3 sm:p-6 border-b sm:border-r sm:border-b-0">
            <ul className="flex flex-row justify-evenly gap-3 uppercase">
              <li>
                <button onClick={copyToClipboard}>
                  {!copied ? (
                    <span className="uppercase">Email</span>
                  ) : (
                    <span className="uppercase"> Email Address copied!</span>
                  )}
                </button>
              </li>
              <li>Github</li>
              <li>Resume</li>
              <li>Source Code</li>
            </ul>
          </div>
          <div className="p-3 sm:p-6 flex flex-row sm:border-l items-center justify-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CCCFCA"
                className="bi bi-spotify"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
              </svg>
            </div>
            <h4 className="">
              <a
                className="underline underline-offset-2"
                href="https://open.spotify.com/album/18NOKLkZETa4sWwLMIm0UZ?si=V-T2ZRC4TgqXLg2UaPvwIA"
                target="_blank"
              >
                UTOPIA, Travis Scott
              </a>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}
