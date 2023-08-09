import Image from "next/image";
import profile from "../images/yusong.webp";

export default function Page() {
  const jobData = [
    {
      company: "Lushful Aesthetics",
      link: "https://www.linkedin.com/company/lushful-aesthetics/about/",
      title: "Frontend Developer | UI/UX Designer",
      location: "Remote | NYC",
      duration: "Jun 22 - Aug 23",
    },
    {
      company: "WWW",
      link: "",
      title: "Freelance Frontend Developer",
      location: "",
      duration: "May 23 - Present",
    },
    {
      company: "Breef",
      link: "https://www.linkedin.com/company/breef/",
      title: "Product Designer",
      location: "Remote | Contractor",
      duration: "Feb 23 - May 23",
    },
    {
      company: "Popchew",
      link: "https://www.linkedin.com/company/popchew/",
      title: "Senior Product Designer",
      location: "NYC",
      duration: "Oct 22 - Jun 23",
    },
    {
      company: "General Assembly",
      link: "https://www.linkedin.com/company/popchew/",
      title: "Software Engineering Immersive Bootcamp",
      location: "Online",
      duration: "Feb 22 - June 22",
    },
    {
      company: "Cascade",
      link: "",
      title: "Creative Director",
      location: "San Diego",
      duration: "May 19 - Aug 21",
    },
    {
      company: "WWW",
      link: "",
      title: "Freelance Product Designer",
      location: "",
      duration: "Jul 18 - Present",
    },
  ];

  const skills = [
    "HTML 5",
    "CSS 3",
    "Javascript",
    "React",
    "GatsbyJS",
    "NextJS",
    "ContentfulCMS",
    "Github",
    "Netlify",
    "Vercel",
    "TailwindCSS",
    "Material UI",
    "Node.js",
  ];

  const design = [
    "Figma",
    "Design System",
    "Apple HIG",
    "User Research",
    "User Journey",
    "Usability Testing",
    "Conceptual Design",
    "Prototyping",
    "Wireframing",
    "Responsive Design",
    "Mobile Design",
    "Adobe Creative Suite",
  ];

  return (
    <div className="flex flex-col">
      <div className="w-full grid grid-cols-8 border-b h-40 sm:h-56 md:h-72 lg:h-96 2xl:h-[28rem]">
        <div className="col-span-5 xl:col-span-6 flex flex-col xl:flex-row justify-evenly h-full w-full">
          <div className="flex justify-center items-center border-b xl:border-b-0 xl:border-r h-1/2 xl:h-full xl:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-shadow-custom font-bold">
              INFO
            </h2>
          </div>
          <div className="flex justify-center items-center h-1/2 xl:h-full  xl:w-1/2">
            <a href="mailto:jackshi.sys@gmail.com">
              <p className="text-sm md:text-base lg:text-lg 2xl:text-2xl underline underline-offset-4">
                Let&apos;s talk! 💬
              </p>
            </a>
          </div>
        </div>
        <div className="relative col-span-3 xl:col-span-2 border-l">
          <Image
            src={profile}
            alt="Picture of the Yusong Shi"
            fill={true}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            className="p-3 md:p-6 lg:p-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-8 lg:min-h-[48rem]">
        <div className="col-span-8 md:col-span-4 p-10 text-lg">
          <p className="">
            Hi, I&apos;m Yusong and I&apos;m a product designer, a web
            developer, and photographer. I love working on the web and I&apos;m
            passionate about blending good design with smooth functionality.
          </p>
          <br />
          <p>
            I love to experiment with the web as a creative mediumand and
            I&apos;m perpetually tinkering with it. Every 6 months, my portfolio
            undergoes a transformation, reflecting my latest experiments and
            learnings. Right now, I&apos;m delving into SwiftUI. Who knows?
            Perhaps I&apos;ll soon launch a mobile app to showcase my journey
            and work — I do have a quirky side, after all.
          </p>
          <br />
          <p className="">
            I&apos;ve been in the product design game for a good 3-5 years,
            creating some cool user-focused designs. But along the way, I felt a
            stronger pull towards coding and making those designs come alive on
            the screen. Coding actually makes me happy and calm. So, I dived
            into a software engineer bootcamp last year, and it lit a fire in
            me. Now, with my design background and new coding chops, I&apos;m
            super excited to jump into the world of frontend development. I
            Can&apos;t wait to dive into this new chapter!
          </p>
          <br />
          <p>
            I&apos;m also a big fan of basketball, cooking, lifting, hiking,
            wood working and making coffee at home (who doesn&apos;t love a good
            cup of espresso or a hand-poured Chemex?)
          </p>
        </div>
        <div className="col-span-8 md:col-span-2 border-y md:border-y-0 md:border-l p-10">
          <div className="text-sm flex flex-col">
            <h4 className="text-base font-semibold pb-6">EXPERIENCE</h4>
            <div className="flex flex-col justify-center gap-6">
              {jobData.map((job, index) => (
                <div key={index} className="flex flex-col justify-center gap-1">
                  <h5>
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h5>
                  <h2 className="">{job.title}</h2>
                  <h3 className="text-xs text-grey">{job.location}</h3>
                  <h3 className="text-xs text-grey uppercase">
                    {job.duration}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-8 md:col-span-2 md:border-l flex flex-col ">
          <div className="flex flex-col border-b p-10 ">
            <h4 className="text-base font-semibold pb-6 uppercase">
              My Toolkit
            </h4>
            <ul className="text-sm flex flex-col  gap-1">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col p-10">
            <h4 className="text-base font-semibold pb-6 uppercase">Design</h4>
            <ul className="text-sm flex flex-col gap-1">
              {design.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
