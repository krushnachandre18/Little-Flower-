
import AdmissionInquiry from "./components/AdmissionInquiry";
import "./App.css";

const schoolPhone = "+919833510002";
const schoolEmail = "Littleflowr@gmail.com";
const mapLink =
  "https://maps.app.goo.gl/4oa3UVXEKgz118VM6?g_st=aw";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">LF</span>
           <img
  src="/images/logo.png"
  alt="Little Flower School Logo"
  className="school-logo"
/>         
          <span>
            <strong>Little Flower</strong>
            <small>English Medium School</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#leadership">Principal</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="#admission" className="nav-cta">
            Enquire Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,32,66,0.88), rgba(8,32,66,0.35)), url('/images/school.jpg')",
        }}
      >
        <div className="hero-content">
          <span className="hero-label">
            WELCOME TO LITTLE FLOWER
          </span>

          <h1>
            Little Flower
            <br />
            English Medium School
          </h1>

          <p className="hero-location">Shaha, Sinnar, Nashik</p>

          <p className="hero-description">
            Nurturing young minds through education, values,
            confidence and opportunities for a brighter future.
          </p>

          <div className="hero-buttons">
            <a href="#admission" className="btn btn-primary">
              Admission Enquiry
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div>
          <span className="highlight-icon">📚</span>
          <h3>Quality Education</h3>
          <p>Supporting learning and development.</p>
        </div>

        <div>
          <span className="highlight-icon">🌱</span>
          <h3>Strong Values</h3>
          <p>Encouraging responsibility and respect.</p>
        </div>

        <div>
          <span className="highlight-icon">🎯</span>
          <h3>Bright Futures</h3>
          <p>Helping students grow with confidence.</p>
        </div>
      </section>

      {/* About */}
      <section className="about section" id="about">
        <div className="about-image">
          <img
            src="/images/classroom.jpg"
            alt="Little Flower School classroom"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <p className="small-title">WHO WE ARE</p>
          <h2>Welcome to Little Flower English Medium School</h2>

          <p>
            Located in Shaha, Sinnar, Nashik, Little Flower English
            Medium School is dedicated to supporting students in
            their educational journey.
          </p>

          <p>
            We believe that education is about more than textbooks.
            It also means developing curiosity, discipline, confidence
            and respect for others.
          </p>

          <a href="#contact" className="text-link">
            Contact Our School →
          </a>
        </div>
      </section>

      {/* Principal */}
      <section className="leadership section" id="leadership">
        <div className="leadership-image">
          <img
            src="/images/owner.jpg"
            alt="Mr. Vijay Ghoderao, school principal"
            loading="lazy"
          />
        </div>

        <div className="leadership-content">
          <p className="small-title">OUR LEADERSHIP</p>
          <h2>Meet Our Owner</h2>
          <h3>Mr. Vijay Ghoderao</h3>

          <p>
            With a commitment to education and student development,
            our school leadership works towards creating a supportive
            learning environment for every student.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <p className="small-title">OUR CAMPUS</p>
          <h2>A Glimpse of Our School</h2>
          <p>
            Explore our school through these campus and learning
            environment photographs.
          </p>
        </div>

        <div className="gallery-grid">
          <figure className="gallery-card">
            <img
              src="/images/school.jpg"
              alt="Little Flower School building"
              loading="lazy"
            />
            <figcaption>Our School</figcaption>
          </figure>

          <figure className="gallery-card">
            <img
              src="/images/classroom.jpg"
              alt="School classroom"
              loading="lazy"
            />
            <figcaption>Learning Environment</figcaption>
          </figure>

          <figure className="gallery-card">
            <img
              src="/images/activites.jpg"
              alt="School activities"
              loading="lazy"
            />
            <figcaption>School Activities</figcaption>
          </figure>
        </div>
      </section>

      {/* Admission */}
      <section id="admission" className="admission-section">
        <div className="section-heading">
          <p className="small-title">JOIN OUR SCHOOL</p>
          <h2>Admission Enquiry</h2>
          <p>
            Interested in learning more about our school? Send us an
            enquiry using the form below.
          </p>
        </div>

        <AdmissionInquiry />
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <div className="section-heading">
          <p className="small-title">GET IN TOUCH</p>
          <h2>Contact Our School</h2>
          <p>
            Reach out to us for school information and admission
            enquiries.
          </p>
        </div>

        <div className="contact-grid">
          <a className="contact-card" href={`tel:${schoolPhone}`}>
            <span className="contact-icon">📞</span>
            <h3>Call Us</h3>
            <p>+91 98335 10002</p>
          </a>

          <a
            className="contact-card"
            href={`mailto:${schoolEmail}`}
          >
            <span className="contact-icon">✉️</span>
            <h3>Email Us</h3>
            <p>Littleflowr@gmail.com</p>
          </a>

          <a
            className="contact-card"
            href={mapLink}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">📍</span>
            <h3>Visit Us</h3>
            <p>Shaha, Sinnar, Nashik, Maharashtra</p>
            <span className="text-link">Open Google Maps →</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="footer-brand">
          Little Flower English Medium School
        </a>

        <p>Shaha, Sinnar, Nashik, Maharashtra</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#admission">Admissions</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Little Flower English Medium
          School. All rights reserved.
        </p>
      </footer>

      {/* Floating WhatsApp Contact */}
      <a
        className="whatsapp-float"
        href={`https://wa.me/${schoolPhone.replace("+", "")}?text=${encodeURIComponent(
          "Hello, I would like to enquire about Little Flower English Medium School, Shaha."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact school on WhatsApp"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;
