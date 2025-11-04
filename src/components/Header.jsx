import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-white text-xl sm:text-2xl font-semibold tracking-tight"
        >
          JJK 3D Gallery
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden sm:flex items-center gap-2 text-sm text-white/80"
        >
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Modern UI</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Smooth Motion</span>
        </motion.div>
      </div>
    </header>
  );
}
