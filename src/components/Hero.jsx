export default function Hero() {
  return (
    <section
      id="hero"
      className="hero text-center d-flex align-items-center justify-content-center"
    >
      <div className="hero-content">
        <h1 className="display-4">🍴 Welcome to Minu's Kitchen Mania</h1>
        <p className="lead">Delicious homemade recipes made with love ❤️</p>

        {/* ✅ Simple anchor link to scroll to specials */}
        <a href="#specials" className="btn btn-primary btn-lg">
          Explore Specialities
        </a>
      </div>
    </section>
  );
}
