
import "./FeaturedVideos.css";

const video = [
  {
    title: "School Activities",
    description: "A glimpse of activities and learning at our school.",
    src: "/video/school-activities.mp4",
  },
  {
    title: "Annual Function",
    description: "Memorable moments from our school celebrations.",
    src: "/video/annual-function.mp4",
  },
  {
    title: "Sports Day",
    description: "Celebrating teamwork, energy and sportsmanship.",
    src: "/video/sports-day.mp4",
  },
];

export default function FeaturedVideos() {
  return (
    <section className="featured-videos" id="school-videos">
      <div className="videos-container">
        <div className="videos-heading">
          <span className="videos-eyebrow">LIFE AT OUR SCHOOL</span>
          <h2>
            Moments That <span>Inspire</span>
          </h2>
          <p>
            Explore school activities, celebrations and memorable
            moments from Little Flower English Medium School.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.title}>
              <div className="video-frame">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
