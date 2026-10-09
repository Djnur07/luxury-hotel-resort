import Image from "next/image";
import Link from "next/link";
import Price from "@/components/Price";
import T from "@/components/T";
import { facilitiesId } from "@/lib/facilities-id";

export type Room = {
  slug: string;
  nama: string;
  harga: number;
  satuan: string;
  tamu: number;
  luas: number;
  fasilitas: string[];
  foto: string;
};

export default function RoomCard({ room }: { room: Room }) {
  const size = room.luas > 0 ? `${room.luas} m²` : "[Size] m²";
  const more = room.fasilitas.length - 3;
  const unitId = room.satuan === "night" ? "malam" : room.satuan;

  return (
    <Link href={`/kamar/${room.slug}`} className="block overflow-hidden rounded-2xl border border-teak/30 bg-linen hover:border-teak transition-colors">
      <div className="relative aspect-[4/3]">
        <Image
          src={room.foto}
          alt={room.nama}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl">{room.nama}</h3>
        <p className="mt-2 text-xs text-teak-dark">
          {room.tamu} <T en="guests" id="tamu" /> &middot; {size}
        </p>
        <ul className="mt-4 space-y-1 text-xs">
          {room.fasilitas.slice(0, 3).map((f) => (
            <li key={f}>
              <T en={f} id={facilitiesId[f] ?? f} />
            </li>
          ))}
        </ul>
        {more > 0 && (
          <p className="mt-1 text-xs text-teak-dark">
            <T en={`+${more} more facilities`} id={`+${more} fasilitas lainnya`} />
          </p>
        )}
        <div className="mt-6 h-px bg-teak/30" />
        <p className="mt-4 text-xs">
          <span className="text-sm font-semibold"><Price idr={room.harga} /></span> /{" "}
          <T en={room.satuan} id={unitId} />
        </p>
      </div>
    </Link>
  );
}
