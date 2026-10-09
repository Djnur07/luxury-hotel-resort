import Link from "next/link";
import T from "@/components/T";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">404</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-3">
        <T en="Page not found" id="Halaman tidak ditemukan" />
      </h1>
      <p className="mt-4 max-w-md text-base">
        <T
          en="The page you are looking for has moved or no longer exists."
          id="Halaman yang Anda cari sudah dipindahkan atau tidak ada lagi."
        />
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-olive px-8 py-4 text-sm font-semibold text-linen hover:bg-ink transition-colors"
      >
        <T en="Back to home" id="Kembali ke beranda" />
      </Link>
    </main>
  );
}
