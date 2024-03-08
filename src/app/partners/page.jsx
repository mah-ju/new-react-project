"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BoxContent } from "@/components/BoxContent";
import { Footer } from "@/components/Footer";
import { Box2 } from "@/components/Box2";
import { BoxPartners } from "@/components/BoxPartners";

export default function Partners() {
  return (
    <>
      <Header />
      <Hero urlImg="/partners.jpg" />

      <Box2
        title="Our partners"
        text="Vivamus lacinia venenatis diam, quis commodo augue venenatis a. Suspendisse id elit a 
purus molestie lacinia. Sed libero felis, hendrerit at eros vitae, 
facilisis auctor erat."
      />

      <BoxPartners />

      <BoxContent
        title="Good ideas are comming"
        text="Phasellus vehicula ligula id mauris suscipit tempus. Nunc ultricies viverra eleifend.
 Ut et commodo dolor. 
 Nulla vulputate velit varius venenatis commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse condimentum nisi at pulvinar tincidunt."
        visibility="invisible"
        mtop="mt-10"
      />

      <Footer />
    </>
  );
}
