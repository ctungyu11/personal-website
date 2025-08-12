import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 40,
          border: "8px solid #3B82F6",
          color: "#1f2937",
          fontWeight: 800,
          fontFamily: "Inter, system-ui, Arial",
          fontSize: 78,
          letterSpacing: 2,
        }}
      >
        AC
      </div>
    ),
    size
  );
}


