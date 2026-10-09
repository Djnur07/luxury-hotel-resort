import T from "@/components/T";

export default function Footer() {
  return (
    <footer className="bg-olive shadow-[0_2px_0_0_var(--color-olive)] text-linen px-6 md:px-12 pt-4 pb-5 md:pt-6 md:pb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3 md:justify-start md:gap-4 text-left">
          <h2 className="font-serif text-[15px] md:text-xl">
            <T en="Ready for a quiet stay?" id="Siap menginap dengan tenang?" />
          </h2>
          <a
            href="https://wa.me/6281234567890?text=Hello,%20I%20would%20like%20to%20book%20a%20room."
            className="ml-auto md:ml-0 inline-block whitespace-nowrap bg-teak text-ink rounded-full px-3 py-0.5 text-[14px] md:px-4 md:py-1.5 md:text-sm font-semibold hover:bg-teak-dark hover:text-linen transition-colors"
          >
            <T en="Book via WhatsApp" id="Pesan via WhatsApp" />
          </a>
        </div>

        <div className="text-[12px] md:text-xs leading-4 md:leading-5 text-sage text-right">
          <p>Jl. Bukit Tenang No. 8, Pecatu, Bali &middot; +62 361 555 0128 &middot; hello@serenestay.example</p>
          <p>Instagram @serenestay.demo &middot; Facebook Serene Stay</p>
        </div>
      </div>

      <p className="mt-2 text-[11px] md:text-xs text-sage/70 text-center">
        &copy; 2026 Serene Stay. <T en="All rights reserved." id="Hak cipta dilindungi." /> &middot;{" "}
        <a href="/policies" className="underline underline-offset-4 hover:text-linen">
          <T en="Policies" id="Kebijakan" />
        </a>
      </p>
    </footer>
  );
}
