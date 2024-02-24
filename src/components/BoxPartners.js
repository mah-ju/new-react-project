import { arrayPartner } from "@/arrayPartners";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const BoxPartners = () =>{
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(() =>{
    const interval = setInterval(() => {
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayPartner.length)
    }, 3000);

return () => clearInterval(interval);

}, [currentIndex]);

    return(
        <div className=" flex justify-center h-[200px]">

           <AnimatePresence>

            {arrayPartner.map((partner, index) => (
                
                index === currentIndex && (

                    <motion.img
                    key={index}
                    src={partner.img}
                    alt={partner.alt}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2, ease: "easeOut"}}
                   className="w-72 rounded-lg"
                    />
                )
            
            ))}

</AnimatePresence> 
            </div>
)

};