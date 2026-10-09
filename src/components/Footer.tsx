export default function Footer() {
  return (
    <footer className="bg-olive text-linen px-6 md:px-12 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4 text-left">
          <h2 className="font-serif text-lg md:text-xl">
            Ready for a quiet stay?
          </h2>
          <a
            href="https://wa.me/62XXXXXXXXXX?text=Hello,%20I%20would%20like%20to%20book%20a%20room."
            className="inline-block bg-teak text-ink rounded-full px-4 py-1.5 text-sm font-semibold hover:bg-teak-dark hover:text-linen transition-colors"
          >
            Book via WhatsApp
          </a>
        </div>

        <div className="text-xs leading-5 text-sage text-right">
          <p>[Address] &middot; [Phone] &middot; [Email]</p>
          <p>[Instagram] &middot; [Facebook]</p>
        </div>
      </div>

      <p className="mt-3 text-xs text-sage/70 text-center">
        &copy; 2026 Serene Stay. All rights reserved.
      </p>
    </footer>
  );
}
