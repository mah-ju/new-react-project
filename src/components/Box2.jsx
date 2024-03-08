export const Box2 = ({ title, text }) => {
  return (
    <div>
      <h2
        className="text-4xl mt-3 py-3 px-2 text-center
              text-transparent font-bold bg-clip-text 
              bg-gradient-to-r from-indigo-300
               via-purple-400 to-pink-600"
      >
        {title}
      </h2>

      <p className="text-lg px-8 text-justify pb-5">{text}</p>
    </div>
  );
};
