import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 12,
          border: "2px solid #3B82F6",
          color: "#1f2937",
          fontWeight: 800,
          fontFamily: "Inter, system-ui, Arial",
          fontSize: 28,
        }}
      >
        AC
      </div>
    ),
    size
  );
}


