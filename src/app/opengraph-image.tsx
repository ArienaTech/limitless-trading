import { ImageResponse } from "next/og";

// Dynamically generated social share card (1200×630) — used for Open Graph
// and Twitter previews across the site. Avoids any external asset fetch so it
// builds reliably in any environment.

export const alt =
  "Limitless Trading Group — Systematic Forex Trading, Education & Fund Management, London UK";
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
          justifyContent: "space-between",
          background: "#15130f",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 6,
            color: "#9A7B2E",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Limitless Trading Group
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -4,
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            Limitless
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#b7b0a1",
              marginTop: 24,
              fontWeight: 500,
            }}
          >
            Systematic forex trading, education &amp; managed capital.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2b2620",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#9A7B2E", letterSpacing: 3, fontWeight: 700, textTransform: "uppercase" }}>
            Learn · Execute · Scale
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#8a8374", letterSpacing: 2 }}>
            London, UK · By application only
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
