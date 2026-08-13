import Link from "next/link";
import Image from "next/image";
import "./Hero.css";
import { FormEvent, useState } from "react";
export default function Hero() {

    const [location, setLocation] = useState("");
    const [cityPin, setCityPin] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log({
            location,
            cityPin,
            date,
            time,
        });
    }
    return (
        <section className="hero-section">
            {/* Decorative shapes */}
            <div className="hero-shape hero-shape-pink"></div>
            <div className="hero-shape hero-shape-blue"></div>

            <div className="container">
                <div className="row align-items-center hero-content">

                    {/* =========================
              LEFT CONTENT
          ========================== */}

                    <div className="col-lg-6">
                        <div className="hero-text">
                            <h1>
                                Find the Right
                                <br />
                                Dialysis Center.
                                <br />
                                <span>Book With Confidence.</span>
                            </h1>

                            <p>
                                Discover trusted dialysis centers near you, check
                                availability, compare facilities, and book your
                                dialysis session quickly and conveniently.
                            </p>

                            <div className="hero-buttons">

                                <Link
                                    href="/dialysis-centers"
                                    className="btn hero-primary-btn"
                                >
                                    Find Dialysis Centers
                                </Link>

                                <Link
                                    href="/how-it-works"
                                    className="btn hero-secondary-btn"
                                >
                                    <span className="play-icon">▶</span>
                                    How It Works
                                </Link>

                            </div>

                            {/* Trust indicators */}

                            <div className="hero-trust">

                                <div className="trust-item">
                                    <strong>100+</strong>
                                    <span>Centers</span>
                                </div>

                                <div className="trust-divider"></div>

                                <div className="trust-item">
                                    <strong>10K+</strong>
                                    <span>Patients</span>
                                </div>

                                <div className="trust-divider"></div>

                                <div className="trust-item">
                                    <strong>25K+</strong>
                                    <span>Bookings</span>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* =========================
              RIGHT IMAGE
          ========================== */}

                    <div className="col-lg-6">
                        <div className="hero-image-wrapper">

                            {/* Decorative circle */}

                            <div className="image-decoration-pink"></div>
                            <div className="image-decoration-blue"></div>

                            <div className="hero-image-container">

                                <Image
                                    src="/images/dialysis1.png"
                                    alt="Patient receiving dialysis treatment"
                                    fill
                                    priority
                                    className="hero-image"
                                    sizes="(max-width: 992px) 100vw, 50vw"
                                />
                            </div>

                        </div>
                    </div>

                </div>

                <div className="hero-search-wrapper">
                    <form
                        className="hero-search-card"
                        onSubmit={handleSearch}
                    >
                        <div className="search-title">
                            <h3>Find a Dialysis Center Near You</h3>

                            <p>
                                Search trusted centers based on your location and availability.
                            </p>
                        </div>

                        <div className="row g-3 align-items-end">

                            {/* Location */}

                            <div className="col-lg-3 col-md-6">
                                <label
                                    htmlFor="location"
                                    className="search-label"
                                >
                                    Location
                                </label>

                                <div className="search-input">
                                    <span className="search-icon">⌖</span>

                                    <div className="search-field">
                                        <small>Enter your location</small>

                                        <input
                                            id="location"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* City / PIN */}

                            <div className="col-lg-2 col-md-6">
                                <label
                                    htmlFor="cityPin"
                                    className="search-label"
                                >
                                    City / PIN Code
                                </label>

                                <div className="search-input">
                                    <span className="search-icon">⌖</span>

                                    <div className="search-field">
                                        <small>City / PIN</small>

                                        <input
                                            id="cityPin"
                                            type="text"
                                            className="form-control"
                                            placeholder="Kochi / 682001"
                                            value={cityPin}
                                            onChange={(e) => setCityPin(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Date */}

                            <div className="col-lg-2 col-md-6">
                                <label
                                    htmlFor="date"
                                    className="search-label"
                                >
                                    Preferred Date
                                </label>

                                <div className="search-input">
                                    <span className="search-icon">▣</span>

                                    <div className="search-field">
                                        <small>Select date</small>

                                        <input
                                            id="date"
                                            type="date"
                                            className="form-control"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Time */}

                            <div className="col-lg-2 col-md-6">
                                <label
                                    htmlFor="time"
                                    className="search-label"
                                >
                                    Preferred Time
                                </label>

                                <div className="search-input">
                                    <span className="search-icon">◷</span>

                                    <div className="search-field">
                                        <small>Select time</small>

                                        <input
                                            id="time"
                                            type="time"
                                            className="form-control"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* Search Button */}

                            <div className="col-lg-3">
                                <button
                                    type="submit"
                                    className="btn search-button w-100"
                                >
                                    <span>⌕</span>
                                    Search Centers
                                </button>
                            </div>

                        </div>
                    </form>
                </div>


            </div>
        </section>
    );
}