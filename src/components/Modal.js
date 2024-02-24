import { X } from "lucide-react";

export const Modal = ({name, email, onClose}) => {
    
 return(

<div className="bg-black/70 h-full w-full fixed flex flex-col justify-center">

<div className="bg-white pb-5 mx-5 rounded-lg">
    <div className="flex justify-end pr-3 pt-3" onClick={onClose}>
    <X className="cursor-pointer" />
    </div>

<h3 className="text-3xl font-bold mt-1 px-3 text-center 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-indigo-300
               via-purple-400 to-pink-600">Thanks for subscribe</h3>
<p className="px-4 text-center text-lg pt-3">Hi, <span className="font-bold text-purple-base">{name}</span>! <br></br> Welcome 
to our community!</p>

<p className="text-center px-4 pt-4">
Your email, <span className="font-bold text-purple-base">{email}</span> was subscribed successfully.
    </p> 

<p className="text-pink-500 font-bold mt-5 text-xl 
text-center">See you soon!</p>
</div>

        </div>
    )
};