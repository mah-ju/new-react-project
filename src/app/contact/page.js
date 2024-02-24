"use client"
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Box2 } from "@/components/Box2";
import { FormContact } from "@/components/FormContact";
import { Modal } from "@/components/Modal";

export default function Contact() {


    const [formData, setFormData] = useState({name: "", email: ""});
    const [isModalOpen, setIsModalOpen] = useState(false);

   

    function openModal() {
        setIsModalOpen(true)
    };

    function closeModal(){
        setIsModalOpen(false)
    };



    return (

        <>

           
    {isModalOpen && <Modal name={formData.name} email={formData.email} onClose={closeModal}/>}

           <Header />

            <Hero
                urlImg="/high-5.jpg" />

            <Box2
                title="Make some contact"
                text="Lorem consectetur adipiscing elit. Phasellus tincidunt, nunc id luctus ornare, velit tellus laoreet dolor, a pellentesque ligula lectus ac dui."
            />

      <FormContact formData={formData} setFormData={setFormData} openModal={openModal}/>
<Footer />
        </>
    )
};