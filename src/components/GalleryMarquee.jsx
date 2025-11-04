import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const JJK_IMAGES = [
  // Public image URLs related to JJK (posters, key visuals, wallpapers)
  'https://images.unsplash.com/photo-1618336753974-44c977bcfb0a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618336753442-29b9a26fbd04?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618336753648-9bf3e8fbfe49?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec2cfb3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531846802986-4942a5c3a114?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975661595-6459e56d22fc?q=80&w=1600&auto=format&fit=crop',
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

function MarqueeRow({ images, direction = 'left', speed = 40 }) {
  const distance = 50; // percentage to travel before looping (use duplicated content)
  const duration = Math.max(10, (100 / speed) * 12);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4 will-change-transform"
        animate={{ x: direction === 'left' ? ['0%', `-${distance}%`] : [`-${distance}%`, '0%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative h-40 sm:h-48 md:h-56 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            <img
              src={src}
              alt="JJK gallery"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GalleryMarquee() {
  const [pool, setPool] = useState(JJK_IMAGES);
  const [groupSize, setGroupSize] = useState(5); // 1-7
  const [directionTop, setDirectionTop] = useState('left');
  const [directionBottom, setDirectionBottom] = useState('right');

  const groups = useMemo(() => chunkArray(pool, groupSize), [pool, groupSize]);
  const row1 = groups[0] || pool.slice(0, groupSize);
  const row2 = groups[1] || pool.slice(groupSize, groupSize * 2).concat(pool.slice(0, Math.max(0, groupSize - (pool.length - groupSize))));

  // Periodically replace 1-7 random images and toggle directions for a lively feel
  useEffect(() => {
    const interval = setInterval(() => {
      const replaceCount = Math.floor(Math.random() * 7) + 1; // 1-7
      setPool((prev) => {
        const next = [...prev];
        for (let i = 0; i < replaceCount; i++) {
          const idx = Math.floor(Math.random() * next.length);
          const pick = JJK_IMAGES[Math.floor(Math.random() * JJK_IMAGES.length)];
          next[idx] = pick;
        }
        return next;
      });
      setDirectionTop((d) => (d === 'left' ? 'right' : 'left'));
      setDirectionBottom((d) => (d === 'left' ? 'right' : 'left'));
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/2 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-semibold">Galeri Horizontal JJK</h3>
            <p className="text-white/70 mt-2 text-sm sm:text-base">
              Foto bergerak kiri-kanan dengan pergantian acak 1-7 foto setiap beberapa detik.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <label className="text-white/70 text-sm">Foto per grup</label>
            <input
              type="range"
              min={1}
              max={7}
              value={groupSize}
              onChange={(e) => setGroupSize(parseInt(e.target.value))}
              className="accent-white/90"
            />
            <span className="text-white/90 text-sm w-6 text-center">{groupSize}</span>
          </div>
        </div>

        <div className="space-y-8">
          <MarqueeRow images={row1} direction={directionTop} speed={48} />
          <MarqueeRow images={row2} direction={directionBottom} speed={38} />
          <MarqueeRow images={(groups[2] || pool.slice(0, groupSize)).reverse()} direction={directionTop === 'left' ? 'right' : 'left'} speed={44} />
        </div>
      </div>
    </section>
  );
}
