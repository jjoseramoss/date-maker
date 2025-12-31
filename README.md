# 📔 Date Maker

A modern, interactive "This or That" web application designed to help couples curate the perfect date night schedule through a series of aesthetic, scrapbook-inspired choices.

## 🚀 Tech Stack
- **Framework:** React 19 (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 🎨 Current Progress: The Scrapbook Engine
The project currently features a dynamic background engine that simulates a physical scrapbook/mood board:
- **Grid Overlay:** A radial-gradient dot grid for a blueprint/journal feel.
- **Scattered Asset Engine:** A custom component that renders `.webp` decorative assets with randomized positions and rotations.
- **Optimized Assets:** Individual transparent cutouts (Paris, Nature, and Cozy themes) stored in `public/assets/decor`.
- **Animated Typography:** A staggered character reveal for the "Date Maker" title using Spring physics.

## 📂 Project Structure
- `src/constants/`: Data maps for Activities, Categories, and Decor.
- `src/components/ui/`: Atomic UI pieces (AnimatedTitle, ScrapbookSticker).
- `src/types/`: Strict TypeScript interfaces for data integrity.

## 🛠️ Setup & Run
1. Clone the repo
2. `npm install`
3. `npm run dev`

## 🔮 Next Steps
- Implement the `useDateFlow` custom hook for state management.
- Build the "Attire Selection" entry screen.
- Develop the "Binary Battle" (This or That) logic for activity selection.