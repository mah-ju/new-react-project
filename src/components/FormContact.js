

export const FormContact = ({formData, setFormData, openModal}) =>{
    

const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));


};



const handleSubmit = (e) => {
e.preventDefault();

if(formData.name === "" || formData.email === ""){
    alert("Fill in all fields")
} else{
    openModal(true)
   
}

};

return(
    
<form onSubmit={handleSubmit} className="pb-10 flex flex-col items-center border-2 border-purple-base pt-10 mx-8 mb-4"> 
<h3 className="text-purple-base font-bold text-3xl px-2 text-center pb-10">Subscribe our Newsletter</h3>
<p className="px-8 text-justify text-lg pb-10">Lorem etc something about contact something etc lorem ipsum dolor core etc fodase</p>
<div className="flex flex-col w-[50%]">
<input type="text"  autoComplete="on" placeholder="Name" name="name" value={formData.name} onChange={handleChange} className="placeholder:font-bold outline-none focus:border-pink-500 border-b-2 border-purple-base"></input>
<input type="email" autoComplete="on" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="placeholder:font-bold focus:border-pink-500 mt-5 outline-none border-b-2 border-purple-base"></input>
</div>
    

<div className="mt-10">
<button type="submit" className="text-base font-bold bg-pink-500 px-7 py-2 rounded-md">Submit</button>
</div>
</form>


)};