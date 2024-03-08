"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Box2 } from "@/components/Box2";
import { BoxContent } from "@/components/BoxContent";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ShowInfos } from "@/components/ShowInfos";

export default function Projects() {
  const [isMore, setIsMore] = useState(false);

  const toggleInfos = () => {
    setIsMore(!isMore);
  };

  return (
    <>
      <Header />

      <Hero urlImg="/high-1.jpg" />

      <Box2
        title="Projects we believe"
        text="Suspendisse eget nunc venenatis, dignissim quam id, elementum nibh. Maecenas facilisis
 ex placerat bibendum lobortis. Etiam tincidunt arcu venenatis libero tincidunt, vitae pharetra odio tempus."
      />

      <BoxContent
        title="Send your idea"
        text="Vivamus varius lorem ipsun etc ahu avoid hsgh tortor vestibulum mi massa, sagittis nec mollis id, rutrum in dolor. "
        textBtn={isMore ? "Hide infos" : "Show infos"}
        onMoreInfo={toggleInfos}
        pBottom="pb-5"
      />

      {isMore && <ShowInfos />}

      <Hero urlImg="/people.jpg" />

      <Footer />
    </>
  );
}
