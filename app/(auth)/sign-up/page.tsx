"use client";
import Link from "next/link";
import SignUp from "@/components/auth/SignUp";

import {
  IconActivity,
  IconClockHour4,
  IconShieldCheck,
} from "@tabler/icons-react";

const BRAND = "#2563eb";

export default function SignInPage() {
  return (
    <main className="min-vh-100 d-flex">
      <SignUp />

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
            background: `linear-gradient(160deg, ${BRAND}e6 0%, #1e3a8ae6 60%, #0f172ae6 100%)`,
          }}
        />

        {/* Content sits above the image + overlay */}
        <div className="position-relative">
          <Link
            href="/"
            className="text-decoration-none fw-bold fs-3 text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            EasyDialysis
          </Link>
        </div>

        <div className="position-relative">
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "2.25rem", lineHeight: 1.2 }}
          >
            Dialysis care,
            <br />
            simplified.
          </h2>

          <p
            className="mb-5"
            style={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: "380px",
            }}
          >
            Find dialysis centers, check availability, and book your
            preferred session — all from one place.
          </p>

          <div className="d-flex flex-column gap-3">
            {/* Benefit 1 */}
            <div
              className="d-flex align-items-start gap-3 p-3 rounded-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <IconClockHour4 size={22} />
              </div>

              <div>
                <div className="fw-semibold">
                  Convenient dialysis booking
                </div>
                <div
                  className="small"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Find available sessions and book in just a few steps.
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div
              className="d-flex align-items-start gap-3 p-3 rounded-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <IconActivity size={22} />
              </div>

              <div>
                <div className="fw-semibold">Multiple dialysis centers</div>
                <div
                  className="small"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Discover dialysis centers and compare available options.
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div
              className="d-flex align-items-start gap-3 p-3 rounded-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <IconShieldCheck size={22} />
              </div>

              <div>
                <div className="fw-semibold">Simple & secure payments</div>
                <div
                  className="small"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Pay securely and keep all your bookings in one place.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="small position-relative"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          © {new Date().getFullYear()} EasyDialysis. All rights reserved.
        </div>
      </div>
    </main>
  );
}