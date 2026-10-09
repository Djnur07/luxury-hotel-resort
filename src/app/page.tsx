import Hero from "@/components/Hero";
import ScrollAnimations from "@/components/ScrollAnimations";
import BookingBar from "@/components/BookingBar";
import About from "@/components/About";
import RoomCard, { type Room } from "@/components/RoomCard";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Offers from "@/components/Offers";
import Dining from "@/components/Dining";
import Around from "@/components/Around";
import CurrencyToggle from "@/components/CurrencyToggle";
import T from "@/components/T";
import kamar from "@/data/kamar.json";

const rooms = kamar as Room[];

export default function Home() {
  return (
    <main>
      <Hero />
      <BookingBar />
      <About />

      <section id="rooms" className="mt-24 bg-stone px-6 md:px-16 py-24">
        <div data-reveal className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.2em] text-teak-dark">
            <T en="Rooms" id="Kamar" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-3">
            <T en="Choose your room" id="Pilih kamar Anda" />
          </h2>
          <CurrencyToggle className="mt-6 flex w-fit" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
          <Offers />
        </div>
      </section>
      <Facilities />
      <Gallery />
      <Dining />
      <Around />
      <Location />
      <Reviews />
      <ScrollAnimations />
    </main>
  );
}
