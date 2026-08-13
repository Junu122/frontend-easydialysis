"use client";
import Link from "next/link";
import SignIn from "@/components/auth/SignIn";

import {
  IconActivity,
  IconClockHour4,
  IconShieldCheck,
} from "@tabler/icons-react";

const BRAND = "#f2519c";

export default function SignInPage() {
  return (
    <main className="min-vh-100 d-flex">
      {/* LEFT: Branding panel */}
    <div
  className="d-none d-lg-flex flex-column justify-content-between text-white p-5 position-relative overflow-hidden"
  style={{
    width: "45%",
  }}
>
  {/* Background image */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Gradient overlay for readability + brand tint */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: `linear-gradient(160deg, ${BRAND}e6 0%, #c93d7fe6 55%, #7a1f52e6 100%)`,
    }}
  />

  {/* Content sits above the image + overlay */}
  <div className="position-relative">
    <Link
      href="/"
      className="text-decoration-none fw-bold text-white d-inline-block"
      style={{ fontSize: "2.75rem", letterSpacing: "-0.03em", lineHeight: 1 }}
    >
      EasyDialysis
    </Link>
  </div>

  <div className="position-relative">
    <h2 className="fw-bold mb-3" style={{ fontSize: "2rem", lineHeight: 1.25 }}>
      Trusted dialysis
      <br />
      care, simplified.
    </h2>

    <p
      className="mb-4"
      style={{ color: "rgba(255,255,255,0.85)", maxWidth: "380px" }}
    >
      Book sessions, track your treatment history, and stay connected
      with your care team — all in one place.
    </p>

    {/* Stats row */}
    <div className="d-flex gap-3 mb-4">
      <div
        className="flex-fill text-center rounded-4 py-3 px-2"
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="fw-bold" style={{ fontSize: "1.5rem", lineHeight: 1.1 }}>
          500+
        </div>
        <div
          className="small mt-1"
          style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.2 }}
        >
          Dialysis centers
        </div>
      </div>

      <div
        className="flex-fill text-center rounded-4 py-3 px-2"
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="fw-bold" style={{ fontSize: "1.5rem", lineHeight: 1.1 }}>
          3000+
        </div>
        <div
          className="small mt-1"
          style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.2 }}
        >
          Sessions completed
        </div>
      </div>

      <div
        className="flex-fill text-center rounded-4 py-3 px-2"
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="fw-bold" style={{ fontSize: "1.5rem", lineHeight: 1.1 }}>
          600+
        </div>
        <div
          className="small mt-1"
          style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.2 }}
        >
          Professional staff
        </div>
      </div>
    </div>
  </div>

  <div className="small position-relative" style={{ color: "rgba(255,255,255,0.65)" }}>
    © {new Date().getFullYear()} EasyDialysis. All rights reserved.
  </div>
</div>

      <SignIn />
    </main>
  );
}