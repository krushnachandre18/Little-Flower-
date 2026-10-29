
import { useState } from "react";
import "./AdmissionInquiry.css";

const SCHOOL_WHATSAPP = "919833510002"; // Replace with school WhatsApp number

function AdmissionInquiry() {
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    standard: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!/^\d{12}$/.test(SCHOOL_WHATSAPP)) {
      alert("Please configure the school's WhatsApp number first.");
      return;
    }

    const text = `New Admission Inquiry

Parent Name: ${form.parentName}
Student Name: ${form.studentName}
Parent Mobile: ${form.phone}
Class: ${form.standard}
Message: ${form.message || "Not provided"}`;

    const url = `https://wa.me/${SCHOOL_WHATSAPP}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="inquiry-section" id="admission">
      <div className="inquiry-heading">
        <p>ADMISSIONS OPEN</p>
        <h2>Admission Inquiry</h2>
        <span>
          Interested in joining our school? Send us your inquiry.
        </span>
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            name="parentName"
            placeholder="Parent / Guardian Name"
            value={form.parentName}
            onChange={handleChange}
            required
          />

          <input
            name="studentName"
            placeholder="Student Name"
            value={form.studentName}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            placeholder="Parent Mobile Number"
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
            required
          />

          <select
            name="standard"
            value={form.standard}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>
            <option value="Nursery">Nursery</option>
            <option value="KG">KG</option>
            <option value="1st Standard">1st Standard</option>
            <option value="2nd-5th Standard">2nd–5th Standard</option>
            <option value="6th-10th Standard">6th–10th Standard</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Your message (optional)"
          value={form.message}
          onChange={handleChange}
          rows={4}
        />

        <button type="submit" className="inquiry-btn">
          Send Inquiry on WhatsApp ↗
        </button>

        <small>
          WhatsApp will open with your inquiry details. Please press Send
          there to submit your inquiry.
        </small>
      </form>
    </section>
  );
}

export default AdmissionInquiry;
