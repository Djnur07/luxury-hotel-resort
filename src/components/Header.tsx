export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-linen">
      <a href="/" className="font-serif text-2xl text-ink">
        Serene Stay
      </a>

      <nav className="hidden md:flex items-center gap-8 text-sm text-ink">
        <a href="#rooms" className="hover:text-teak-dark">Rooms</a>
        <a href="#facilities" className="hover:text-teak-dark">Facilities</a>
        <a href="#gallery" className="hover:text-teak-dark">Gallery</a>
        <a href="#location" className="hover:text-teak-dark">Location</a>
        <a href="#reviews" className="hover:text-teak-dark">Reviews</a>
      </nav>

      <a
        href="#booking"
        className="border border-teak rounded-full px-5 py-2 text-sm font-medium text-ink hover:bg-sage transition-colors"
      >
        Book Now
      </a>
    </header>
  );
}
