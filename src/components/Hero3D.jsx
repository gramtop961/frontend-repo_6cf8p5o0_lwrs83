import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8Oe8vQld0oR6m7oG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth, don't block scene interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute -inset-x-10 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow">Jujutsu Kaisen 3D Experience</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Jelajahi galeri modern bertema JJK dengan efek 3D dan animasi yang halus. Nikmati deretan foto bergerak kiri-kanan yang terus berganti.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
