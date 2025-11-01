import Link from "next/link";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f8fafc",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <Link
        href="/dashboard"
        style={{
          background: "#6366f1",
          color: "white",
          padding: "10px 18px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Go to Dashboard →
      </Link>
    </div>
  );
}