import { Titillium_Web as Font } from "next/font/google";
import Head from "next/head";
import { FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import SocialLink from "~/components/SocialLink";

const font = Font({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [screenSize, setScreenSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimension = () =>
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", () => updateDimension());
    return () => window.removeEventListener("resize", updateDimension);
  });

  return (
    <>
      <Head>
        <title>Kade Allen</title>
        <meta name="description" content="Kade Allen's portfolio website" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main
        className={`${font.className} align-center grid h-screen grid-cols-1 justify-center bg-gradient-to-br from-vulcan-950 to-vulcan-700 text-white lg:grid-cols-2`}
      >
        <div className="my-8 text-2xl md:m-auto">
          <h3 className="ml-10">Hi, I'm</h3>
          <h1 className="mx-5 text-9xl">Kade Allen</h1>
          <h3 className="ml-10">
            a <b className="text-vulcan-200">developer</b> based in{" "}
            {screenSize.width < 840 ? <br /> : null}
            Wellington, New Zealand
          </h3>
          <div className="links-container mx-10 my-5 flex flex-row space-x-10">
            <SocialLink link="http://www.github.com/kadeallen123">
              Github
            </SocialLink>
            <SocialLink link="mailto:kadeallenprofessional@gmail.com">
              Email
            </SocialLink>
            <SocialLink link="tel: +64 027 404 8738">Phone</SocialLink>
          </div>
        </div>
        <div className="m-auto"></div>
      </main>
    </>
  );
}
