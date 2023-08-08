"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "lobby", url: "/", active: true },
  { label: "photography", url: "/photography", active: true },
  { label: "info", url: "/info", active: true },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky bg-[#080808] top-0 z-10 box-border text-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b">
          <div className="p-3 sm:p-6 border-b sm:border-r sm:border-b-0 text-center ">
            <Link href="/">
              <h5 className="font-medium md:font-bold uppercase text-[#CCCFCA] mix-blend-difference">
                Yusong Shi
              </h5>
            </Link>
          </div>
          <div className="flex flex-row p-3 sm:p-6 sm:border-l items-end justify-evenly sm:gap-8 uppercase font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.url;

              return (
                <Link
                  className={`${
                    isActive
                      ? "line-through decoration-[2px] decoration-[#CCCFCA]"
                      : ""
                  } hover:line-through hover:decoration-[2px] decoration-[#CCCFCA]`}
                  href={link.url}
                  key={link.label}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
