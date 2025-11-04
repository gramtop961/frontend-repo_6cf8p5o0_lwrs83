export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} JJK 3D Gallery. Dibuat dengan cinta dan animasi halus.</p>
        <div className="text-white/60 text-xs">Inspired by Jujutsu Kaisen — fan-made gallery.</div>
      </div>
    </footer>
  );
}
