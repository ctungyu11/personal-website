import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Anthony Chou";
  const subtitle = searchParams.get("subtitle") || "Backend Engineer & Quant Developer";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#ffffff",
          color: "#0f172a",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(600px 600px at 85% 50%, rgba(59,130,246,0.12), transparent)",
          }}
        />
        <div style={{ fontSize: 56, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 28, marginTop: 12 }}>{subtitle}</div>
        <div style={{ position: "absolute", right: 64, top: 64, height: 180, width: 180, borderRadius: 180, background: "#e2e8f0" }} />
        <div style={{ position: "absolute", bottom: 32, right: 64, opacity: 0.1, fontWeight: 800, fontSize: 64 }}>AC</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}


