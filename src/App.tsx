import { ScrapbookSticker } from "./components/ui/ScrapbookSticker";
import { DECOR_STICKERS } from "./constants/data";
import AnimatedTitle from "./components/ui/AnimatedTitle";

export default function App() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      {/* Grid Background Layer */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 2. Decorative Scrapbook Cutouts */}
      <div className="absolute inset-0 z-10">
        {DECOR_STICKERS.map(sticker => (
          <ScrapbookSticker key={sticker.id} sticker={sticker}/>
        ))}
      </div>

      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4">
        <AnimatedTitle />
        {/* Selection Views */}
      </main>
    </div>
  );
}
