import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0e0c",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background texture — diagonal stripes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(200,90,0,0.04) 0px, rgba(200,90,0,0.04) 1px, transparent 1px, transparent 60px)",
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: "#c85a00",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "0 100px",
            textAlign: "center",
          }}
        >
          {/* Location badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#c85a00",
              borderRadius: 4,
              padding: "5px 18px",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Bell County, Texas
            </span>
          </div>

          {/* Main wordmark */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                color: "#f5f0e8",
                fontSize: 100,
                fontWeight: 900,
                letterSpacing: "-3px",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              OUTLAW FEED
            </span>
            <span
              style={{
                color: "#e8a44a",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              TEXAS-MADE DOG FOOD
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 2,
              background: "#c85a00",
              borderRadius: 2,
            }}
          />

          {/* Tagline */}
          <span
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: 20,
              lineHeight: 1.5,
              maxWidth: 640,
            }}
          >
            No Corn. No Wheat. No Soy. Zero Fillers. Real Meat First.
          </span>

          {/* Proof pills */}
          <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
            {["Gold Formula", "Blue Formula", "Made in Texas", "Zero Fillers"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  background: "rgba(200,90,0,0.15)",
                  border: "1px solid rgba(200,90,0,0.4)",
                  borderRadius: 4,
                  padding: "6px 18px",
                  color: "#e8a44a",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
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
