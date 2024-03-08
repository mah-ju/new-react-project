"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BoxContent } from "@/components/BoxContent";
import { Footer } from "@/components/Footer";
import { Mission } from "@/components/Mission";

export default function About() {
  return (
    <>
      <Header />
      <Hero urlImg="/high-2.jpg" />

      <BoxContent
        title="What we want"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida nisi sed nunc venenatis euismod. Fusce lobortis facilisis mauris sit amet dignissim. Mauris tortor odio, vulputate id ullamcorper at, pulvinar sit amet tortor. Donec eget diam urna."
        visibility="hidden"
        pBottom="pb-10"
      />

      <Mission />

      <Hero urlImg="/high-4.jpg" />

      <BoxContent
        title="See what people are saying about us"
        text="Proin fermentum, turpis quis ornare fermentum, ac scelerisque lorem nulla sed massa. Duis id congue nulla. Suspendisse vulputate molestie tortor vitae commodo. In malesuada nisl eu tortor placerat, in sollicitudin mi facilisis. Quisque malesuada est et libero tempor rhoncus"
        textBtn="Go to Community"
        pBottom="pb-10"
      />
      <Footer />
    </>
  );
}
