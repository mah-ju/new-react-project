export const BoxContent = ({title, text, visibility, mtop, pBottom, textBtn, linkBtn, onMoreInfo}) =>{
return(
<div className={`bg-purple-300 ${pBottom} ${mtop}`}>
<h2 className="text-4xl font-bold text-purple-base pt-5 px-2 pb-3 text-center">
    {title}
</h2>

<p className="text-lg px-8 text-justify">
{text}
</p>

<div className={`flex justify-center mt-8 ${visibility}`}>
<button className="text-lg font-bold bg-pink-500 px-7 py-2 rounded-md" 
onClick={onMoreInfo}>
    <a href={linkBtn}>{textBtn}</a>
    </button>
</div>

 </div>
       
    )
}