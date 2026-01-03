import SelectionCard from "../selection/SelectionCard"
import { ATTIRE_OPTIONS } from "../../constants/data";
import type { AttireType } from "../../types";

interface AttireSelectionProps {
  onSelect: (attire: AttireType) => void;
}

const AttireSelection = ({ onSelect }: AttireSelectionProps) => {
  const title = "Choose Your Attire";
  const characters = title.split("");
  const colors = ["#d4533e", "#e67e22", "#f39c12", "#c67c4e", "#a0522d", "#d2691e", "#cd5c5c", "#e8a87c", "#b8860b", "#cc5500"];
  

  return (
    <div className="pt-6 flex flex-col justify-center items-center">
        <h1
          className="text-5xl pb-6 font-black italic tracking-wide"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", letterSpacing: '0.05em' }}
        >
          {characters.map((char, idx) => (
            <span 
              key={idx} 
              style={{ 
                color: colors[idx % colors.length],
                display: 'inline-block',
                textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className="grid grid-cols-3 gap-6">
            {ATTIRE_OPTIONS.map((a, idx) => 
                <SelectionCard
                id={idx}
                type={a.type}
                label={a.label}
                description={a.description}
                onClick={() => { onSelect(a.type); return ""; }} 
                 />
            )}
        </div>
    </div>
  )
}

export default AttireSelection