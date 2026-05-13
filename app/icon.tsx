import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0f0e0c",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Cowboy hat silhouette */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 100 100"
          style={{ position: "absolute" }}
        >
          {/* Hat brim */}
          <ellipse cx="50" cy="72" rx="42" ry="10" fill="#c8a435" />
          {/* Hat crown */}
          <path
            d="M22 72 C22 72 28 38 50 34 C72 38 78 72 78 72Z"
            fill="#c8a435"
          />
          {/* Hat band */}
          <rect x="24" y="60" width="52" height="8" rx="2" fill="#1a1712" />
          {/* O letter (rendered with shapes because <text> is not supported by Next OG) */}
          <ellipse cx="50" cy="58" rx="9" ry="10" fill="#f5f0e8" />
          <ellipse cx="50" cy="58" rx="5" ry="6" fill="#0f0e0c" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
