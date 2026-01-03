import type { Activity, Category, Sticker, AttireType } from '../types';

export const ATTIRE_OPTIONS: { type: AttireType; label: string; description: string }[] = [
  { type: 'Cozy', label: '☁️ Cozy', description: 'Sweatpants & Chill' },
  { type: 'Casual', label: '👟 Casual', description: 'Easygoing & Fun' },
  { type: 'Fancy', label: '✨ Fancy', description: 'Dress to Impress' },
];

export const ACTIVITIES: Activity[] = [
  // COZY ACTIVITIES
  { id: 'a1', title: 'Baking Contest', description: 'Flour everywhere, winner eats the most.', imageUrl: '/baking.webp', attire: ['Cozy'], tags: ['indoor', 'food'] },
  { id: 'a2', title: 'Movie Marathon', description: 'Build a fort and pick a trilogy.', imageUrl: '/movie.webp', attire: ['Cozy'], tags: ['indoor', 'relax'] },
  { id: 'a3', title: 'Puzzle Night', description: '1000 pieces of pure chaos.', imageUrl: '/puzzle.webp', attire: ['Cozy'], tags: ['indoor', 'brain'] },
  { id: 'a4', title: 'Indoor Picnic', description: 'Floor seating and charcuterie.', imageUrl: '/picnic.webp', attire: ['Cozy', 'Casual'], tags: ['indoor', 'food'] },

  // CASUAL ACTIVITIES
  { id: 'a5', title: 'Arcade Bar', description: 'High scores and cheap drinks.', imageUrl: '/arcade.webp', attire: ['Casual'], tags: ['outdoor', 'active'] },
  { id: 'a6', title: 'Thrift Shopping', description: 'Find the ugliest outfit for each other.', imageUrl: '/thrift.webp', attire: ['Casual'], tags: ['outdoor', 'active'] },
  { id: 'a7', title: 'Bowling', description: 'Strike or gutter, no in-between.', imageUrl: '/bowling.webp', attire: ['Casual'], tags: ['indoor', 'active'] },
  { id: 'a8', title: 'Mini Golf', description: 'Testing the relationship on the 18th hole.', imageUrl: '/golf.webp', attire: ['Casual'], tags: ['outdoor', 'active'] },

  // FANCY ACTIVITIES
  { id: 'a9', title: 'Steakhouse Dinner', description: 'Dress to impress and eat well.', imageUrl: '/steak.webp', attire: ['Fancy'], tags: ['indoor', 'food'] },
  { id: 'a10', title: 'Jazz Lounge', description: 'Smooth tunes and classy cocktails.', imageUrl: '/jazz.webp', attire: ['Fancy'], tags: ['indoor', 'music'] },
  { id: 'a11', title: 'Art Gallery', description: 'Pretend to understand abstract art.', imageUrl: '/art.webp', attire: ['Fancy'], tags: ['indoor', 'culture'] },
  { id: 'a12', title: 'Wine Tasting', description: 'Swirl, sniff, and sip.', imageUrl: '/wine.webp', attire: ['Fancy'], tags: ['outdoor', 'food'] },

  // NIGHT CAPS (Universal/Mix)
  { id: 'a13', title: 'Stargazing', description: 'Blankets and a telescope.', imageUrl: '/stars.webp', attire: ['Cozy', 'Casual'], tags: ['outdoor'] },
  { id: 'a14', title: 'Ice Cream Run', description: 'Late night sugar rush.', imageUrl: '/icecream.webp', attire: ['Casual', 'Fancy'], tags: ['outdoor'] },
  { id: 'a15', title: 'Late Night Walk', description: 'Just talking and walking.', imageUrl: '/walk.webp', attire: ['Cozy', 'Casual', 'Fancy'], tags: ['outdoor'] },
  { id: 'a16', title: 'Drive to a Viewpoint', description: 'City lights and music.', imageUrl: '/view.webp', attire: ['Casual', 'Fancy'], tags: ['outdoor'] },
];


export const CATEGORIES: Category[] = [
  // COZY FLOW
  {
    id: 'cat-cozy-main',
    title: 'Cozy Main Event',
    associatedAttire: 'Cozy',
    activityIds: ['a1', 'a2', 'a3', 'a4'],
    stepOrder: 1
  },
  {
    id: 'cat-cozy-night',
    title: 'Cozy Night Cap',
    associatedAttire: 'Cozy',
    activityIds: ['a13', 'a15', 'a2', 'a4'], // Mixing some main/night options
    stepOrder: 2
  },

  // CASUAL FLOW
  {
    id: 'cat-casual-main',
    title: 'Casual Main Event',
    associatedAttire: 'Casual',
    activityIds: ['a5', 'a6', 'a7', 'a8'],
    stepOrder: 1
  },
  {
    id: 'cat-casual-night',
    title: 'Casual Night Cap',
    associatedAttire: 'Casual',
    activityIds: ['a14', 'a16', 'a13', 'a15'],
    stepOrder: 2
  },

  // FANCY FLOW
  {
    id: 'cat-fancy-main',
    title: 'Fancy Main Event',
    associatedAttire: 'Fancy',
    activityIds: ['a9', 'a10', 'a11', 'a12'],
    stepOrder: 1
  },
  {
    id: 'cat-fancy-night',
    title: 'Fancy Night Cap',
    associatedAttire: 'Fancy',
    activityIds: ['a14', 'a16', 'a15', 'a10'],
    stepOrder: 2
  }
];


export const DECOR_STICKERS: Sticker[] = [
  { id: 'd1', src: '../src/public/assets/decor/camera.webp', alt: 'Vintage Camera', defaultScale: 1.2 },
  { id: 'd2', src: '../src/public/assets/decor/cat-headphones.webp', alt: 'Cat with Headphones', defaultScale: 1.0 },
  { id: 'd3', src: '../src/public/assets/decor/coffee.webp', alt: 'Coffee Cup', defaultScale: 0.8 },
  { id: 'd4', src: '../src/public/assets/decor/ghost-couple.webp', alt: 'Ghost Couple', defaultScale: 1.1 },
  { id: 'd5', src: '../src/public/assets/decor/heart-cookies.webp', alt: 'Heart Shaped Cookies', defaultScale: 0.9 },
  { id: 'd6', src: '../src/public/assets/decor/heart-print.webp', alt: 'Red Heart Print', defaultScale: 0.7 },
  { id: 'd7', src: '../src/public/assets/decor/love-letters.webp', alt: 'Love Letters', defaultScale: 1.0 },
  { id: 'd8', src: '../src/public/assets/decor/paris.webp', alt: 'Eiffel Tower Drawing', defaultScale: 1.3 },
  { id: 'd9', src: '../src/public/assets/decor/remy.webp', alt: 'Remy the Rat', defaultScale: 0.8 },
  { id: 'd10', src: '../src/public/assets/decor/swans-stamp.webp', alt: 'Swan Postage Stamp', defaultScale: 0.6 },
  { id: 'd11', src: '../src/public/assets/decor/tea-date.webp', alt: 'Tea Set', defaultScale: 1.0 },
  { id: 'd12', src: '../src/public/assets/decor/ticket.webp', alt: 'Metro Ticket', defaultScale: 0.7 },
  { id: 'd13', src: '../src/public/assets/decor/van-gough-art.webp', alt: 'Starry Night Fragment', defaultScale: 1.2 },
];

// ../src/public../src/public/assets/decor/paris.webp