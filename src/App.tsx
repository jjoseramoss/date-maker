import { useState } from "react";
import { ScrapbookSticker } from "./components/ui/ScrapbookSticker";
import { DECOR_STICKERS } from "./constants/data";
import AnimatedTitle from "./components/ui/AnimatedTitle";
import Planner from "./components/layout/Planner";

export default function App() {
  const [isPlanning, setIsPlanning] = useState<boolean>(false);
  console.log(isPlanning);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f0ebd8]">
      {/* Grid Background Layer */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#000 2px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 2. Decorative Scrapbook Cutouts */}
      <div className="absolute inset-0 z-10">
        {DECOR_STICKERS.map((sticker) => (
          <ScrapbookSticker key={sticker.id} sticker={sticker} />
        ))}
      </div>

      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4">
        <AnimatedTitle />
        {/* Selection Views */}

        {/* Start Plan Button */}
        <button
          className={`border-2 px-4 py-2 rounded-2xl mt-5 bg-green-300 font-bold hover:bg-green-400 transition ${
            !isPlanning ? "" : "hidden"
          }`}
          onClick={() => setIsPlanning(true)}
        >
          Start
        </button>

          {isPlanning && <Planner/>}
        
        


      </main>
    </div>
  );
}
