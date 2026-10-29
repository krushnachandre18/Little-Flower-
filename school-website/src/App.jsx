
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🏫 Our School</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">WELCOME TO OUR SCHOOL</p>
          <h1>Building Bright Futures</h1>
          <p>
            Quality Education, Strong Values and a Better Tomorrow.
          </p>
          <a href="#about" className="btn">Discover Our School</a>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="small-title">WHO WE ARE</p>
        <h2>About Our School</h2>
        <p>
          Our school is committed to providing quality education,
          developing student potential and building a strong foundation
          for lifelong learning.
        </p>
      </section>

      <section className="owner section">
        <div className="owner-photo">School Owner Photo</div>
        <div>
          <p className="small-title">OUR LEADERSHIP</p>
          <h2>Meet Our Founder</h2>
          <h3>Owner / Founder Name</h3>
          <p>
            Our vision is to provide quality education and create
            opportunities for every student to succeed.
          </p>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <p className="small-title">OUR CAMPUS</p>
        <h2>School Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-card">School Building</div>
          <div className="gallery-card">Classrooms</div>
          <div className="gallery-card">School Activities</div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="small-title">GET IN TOUCH</p>
        <h2>Contact Our School</h2>
        <p>📍 School Address, City, Maharashtra</p>
        <p>📞 +91 XXXXX XXXXX</p>
        <p>✉️ school@example.com</p>
      </section>

      <footer className="footer">
        <h3>Our School</h3>
        <p>Education • Values • Excellence</p>
        <p>© {new Date().getFullYear()} Our School. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
