import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#09090b",
        color: "#f4f4f5",
        backgroundImage:
          "linear-gradient(to right, #1f1f23 1px, transparent 1px), linear-gradient(to bottom, #1f1f23 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#a1a1aa" }}>
        <div
          style={{
            display: "flex",
            width: 56,
            height: 56,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            background: "#f4f4f5",
            color: "#09090b",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          HS
        </div>
        <span>portfolio</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
        <div style={{ marginTop: 20, fontSize: 40, color: "#8fb4ff" }}>{profile.role}</div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#a1a1aa", maxWidth: 950 }}>
          React.js · Next.js · TypeScript · RBAC · Performance · AI-assisted workflows
        </div>
      </div>
    </div>,
    size,
  );
}
