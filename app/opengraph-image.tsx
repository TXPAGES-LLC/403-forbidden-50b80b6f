import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outlaw Feed | Texas-Made Dog Food for Working & Hunting Dogs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0e0c",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background hero image */}
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
          alt=""
        />

        {/* Dark overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(15,14,12,0.4) 0%, rgba(15,14,12,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Brand badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#c85a00",
              borderRadius: 4,
              padding: "6px 20px",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontFamily: "serif",
              }}
            >
              Bell County, Texas
            </span>
          </div>

          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                color: "#f5f0e8",
                fontSize: 96,
                fontWeight: 900,
                fontFamily: "serif",
                letterSpacing: "-2px",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              OUTLAW FEED
            </span>
            <span
              style={{
                color: "#e8a44a",
                fontSize: 28,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              TEXAS-MADE DOG FOOD
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              color: "rgba(245,240,232,0.75)",
              fontSize: 22,
              fontFamily: "sans-serif",
              marginTop: 8,
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            No Corn. No Wheat. No Soy. Real Meat — First Ingredient.
          </p>

          {/* Proof pills */}
          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            {["AAFCO Certified", "Made in Texas", "Real Meat First"].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(200,90,0,0.2)",
                  border: "1px solid rgba(200,90,0,0.5)",
                  borderRadius: 4,
                  padding: "6px 16px",
                  color: "#e8a44a",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
