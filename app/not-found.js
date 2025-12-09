import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>404 - Page Not Found</h1>

      <p style={{ marginTop: "10px", color: "#555", maxWidth: "500px" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#0070f3",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
