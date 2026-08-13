
import { useState } from "react";
import Link from "next/link";

import {
    IconEye,
    IconEyeOff,
    IconLock,
    IconMail,
    IconUser,
 
} from "@tabler/icons-react";

const BRAND = "#f2519c";
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name,setName]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 900));
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center px-3 py-5 flex-grow-1"
            style={{
                background:
                    "radial-gradient(circle at top, #fdf2f8 0%, #f8f9fa 55%, #f1f3f5 100%)",
            }}
        >
            <div className="w-100" style={{ maxWidth: "420px" }}>
                {/* Mobile-only logo (hidden on large screens since left panel has it) */}
                <div className="text-center mb-4 d-lg-none">
                    <Link
                        href="/"
                        className="text-decoration-none fw-bold fs-3"
                        style={{ color: BRAND, letterSpacing: "-0.02em" }}
                    >
                        EasyDialysis
                    </Link>
                    <p className="text-secondary mt-2 mb-0">
                        Welcome back. Sign up to access and book your appointments.
                    </p>
                </div>

                <div
                    className="bg-white rounded-4 p-4 p-md-5"
                    style={{
                        boxShadow:
                            "0 1px 2px rgba(16,24,40,0.06), 0 12px 32px -8px rgba(242,81,156,0.18)",
                        border: "1px solid rgba(0,0,0,0.04)",
                    }}
                >
                    <h1 className="fs-4 fw-bold mb-1">Sign up</h1>
                    <p className="text-secondary small mb-4">
                        Enter your details to create your account.
                    </p>

                    <button
                        type="button"
                        className="btn btn-light border w-100 rounded-3 py-2 mb-3 d-flex align-items-center justify-content-center gap-2 fw-medium"
                        style={{ transition: "background-color 0.15s ease" }}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                            <path
                                fill="#4285F4"
                                d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"
                            />
                            <path
                                fill="#34A853"
                                d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.94v2.33A9 9 0 0 0 9 18z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.94A9 9 0 0 0 0 9c0 1.45.35 2.83.94 4.03l3.01-2.33z"
                            />
                            <path
                                fill="#EA4335"
                                d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .94 4.97l3.01 2.33C4.66 5.17 6.65 3.58 9 3.58z"
                            />
                        </svg>
                        Continue with Google
                    </button>

                    <div className="d-flex align-items-center gap-3 my-4">
                        <div className="flex-grow-1 border-top" />
                        <span className="text-secondary small">or continue with email</span>
                        <div className="flex-grow-1 border-top" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label small fw-medium">
                                Name
                            </label>
                            <div className="position-relative">
                                <IconUser
                                    size={18}
                                    className="position-absolute top-50 translate-middle-y text-secondary"
                                    style={{ left: "12px", pointerEvents: "none" }}
                                />
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control rounded-3 ps-5 py-2"
                                    placeholder="Enter your name"
                                    required
                                    style={{ borderColor: "#dee2e6" }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = BRAND)}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = "#dee2e6")}
                                />
                            </div>
                            
                            <label htmlFor="email" className="form-label small fw-medium">
                                Email
                            </label>
                            <div className="position-relative">
                                <IconMail
                                    size={18}
                                    className="position-absolute top-50 translate-middle-y text-secondary"
                                    style={{ left: "12px", pointerEvents: "none" }}
                                />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control rounded-3 ps-5 py-2"
                                    placeholder="you@example.com"
                                    required
                                    style={{ borderColor: "#dee2e6" }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = BRAND)}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = "#dee2e6")}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label htmlFor="password" className="form-label small fw-medium mb-0">
                                    Password
                                </label>
                            </div>
                            <div className="position-relative">
                                <IconLock
                                    size={18}
                                    className="position-absolute top-50 translate-middle-y text-secondary"
                                    style={{ left: "12px", pointerEvents: "none" }}
                                />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control rounded-3 ps-5 pe-5 py-2"
                                    placeholder="Enter your password"
                                    required
                                    style={{ borderColor: "#dee2e6" }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = BRAND)}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = "#dee2e6")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="btn position-absolute top-50 translate-middle-y p-0 border-0 bg-transparent text-secondary"
                                    style={{ right: "12px" }}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn w-100 rounded-3 py-2 text-white fw-semibold mt-2 d-flex align-items-center justify-content-center gap-2"
                            style={{
                                backgroundColor: BRAND,
                                borderColor: BRAND,
                                boxShadow: "0 4px 12px rgba(242,81,156,0.35)",
                                transition: "opacity 0.15s ease",
                                opacity: isSubmitting ? 0.75 : 1,
                            }}
                        >
                            {isSubmitting && (
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            )}
                            {isSubmitting ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    <p className="text-center text-secondary small mt-4 mb-0">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            style={{ color: BRAND }}
                        >
                            Sign in
                        </Link>
                    </p>
                </div>

                <p className="text-center text-secondary small mt-4 mb-0">
                    By continuing, you agree to our{" "}
                    <Link href="/terms" className="text-decoration-none" style={{ color: BRAND }}>
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-decoration-none" style={{ color: BRAND }}>
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}