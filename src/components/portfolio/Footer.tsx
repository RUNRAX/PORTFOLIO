export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="liquid-glass rounded-3xl px-6 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Rakshit Awati · Crafted with liquid glass & framer-motion.
        </div>
      </div>
    </footer>
  );
}
