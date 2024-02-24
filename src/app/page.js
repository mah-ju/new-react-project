"use client"
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { BoxContent } from "@/components/BoxContent";
import { Footer } from "@/components/Footer";
import { Box2 } from "@/components/Box2";
import { Header } from "@/components/Header";

export default function Home() {

  
  return (

    <div>
      
      <Header />

      <Hero
        urlImg="/hero-img.jpg" />

      <Highlights />

      <BoxContent
        title="Some Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida nisi sed nunc venenatis euismod. Fusce lobortis facilisis mauris sit amet dignissim. Mauris tortor odio, vulputate id ullamcorper at, pulvinar sit amet tortor. Donec eget diam urna."
        mtop="mt-10"
        textBtn="See Details"
        pBottom="pb-10"
      />

      <Box2
        title="Enjoy the lifestyle"
        text=" Proin fermentum, turpis quis ornare fermentum, 
eros metus suscipit nisi, ac scelerisque lorem nulla sed massa. Duis id congue nulla. 
Suspendisse vulputate molestie tortor vitae commodo."
      />
      <Hero

        urlImg="/high-3.jpg" />

      <Footer />
    </div>
  );
}
