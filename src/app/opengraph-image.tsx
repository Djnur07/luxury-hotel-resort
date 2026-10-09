export const dynamic = "force-static";


import { ImageResponse } from "next/og";

export const alt = "Serene Stay, a quiet boutique hotel in Bali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#3D4A36",
          color: "#F5F0E6",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, color: "#DCE0D0" }}>
          HOTEL &amp; RESORT · BALI
        </div>
        <div style={{ fontSize: 104, marginTop: 24 }}>Serene Stay</div>
        <div style={{ width: 120, height: 2, background: "#A57A50", marginTop: 32 }} />
        <div style={{ fontSize: 34, marginTop: 32, color: "#DCE0D0" }}>
          A quiet place to rest
        </div>
      </div>
    ),
    size
  );
}
