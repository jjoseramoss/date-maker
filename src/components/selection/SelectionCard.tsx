import type { AttireOption } from "../../types";

const SelectionCard = ({type, label, description, onClick}: AttireOption) => {
  return (
    <div onClick={onClick}>
      <a
        href="#"
        className="group relative block max-w-screen-sm mx-auto h-64 sm:h-80 lg:h-55"
      >
        <span className="absolute inset-0"></span>

        <div className={`${type === "Cozy" ? "bg-[#caffbf]" : type === "Casual" ? "bg-[#bdb2ff]" : "bg-[#5fa8d3]"} relative flex h-full w-60 transform items-end border-2 rounded-4xl border-black transition-transform group-hover:scale-105`}>
          <div className="p-4 pt-0! transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            
            <p className="mt-4 text-xl font-medium sm:text-2xl">{`${type === "Cozy" ? "🛌" : type === "Casual" ? "🕶" : "🤵♥👩‍💼"}`}</p>
            

            <h2 className="mt-4 text-xl font-medium sm:text-2xl">{type}</h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">{label}</h3>

            <p className="mt-4 text-sm sm:text-base">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SelectionCard;
