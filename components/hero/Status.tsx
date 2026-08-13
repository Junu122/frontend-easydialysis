import "./Status.css";

const stats = [
  {
    value: "100+",
    label: "Dialysis Centers",
    icon: "⌂",
  },
  {
    value: "10,000+",
    label: "Patients Served",
    icon: "♧",
  },
  {
    value: "25,000+",
    label: "Sessions Booked",
    icon: "✓",
  },
  {
    value: "24/7",
    label: "Booking Support",
    icon: "◉",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-3">

          {stats.map((stat) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={stat.label}
            >
              <div className="stat-card">

                <div className="stat-icon">
                  {stat.icon}
                </div>

                <div className="stat-content">
                  <h3>{stat.value}</h3>

                  <p>{stat.label}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}