import teamPhoto from '../assets/Software_developer.webp'
import './About.css'

export default function About(){
  return (
    <section className="about" id="about">
      <div className="about-banner" aria-hidden="true">
        <span>SOLID5</span>
      </div>

      <div className="about-body container">
        <h2 className="about-heading">ABOUT<br/>US.</h2>

        <p className="about-copy">
          <strong>Solid5</strong> is an authorised CIPZ registration agent
          based in Harare, helping founders across Zimbabwe get their
          businesses registered correctly the first time — from name
          search to founding documents, we manage the entire process on
          your behalf, no queues, no confusing forms, no guesswork.
        </p>

        <p className="about-copy">
          We're also a software studio, building websites, web platforms,
          and mobile applications for businesses that need work shipped
          properly the first time. Whether you're just registering your
          company or ready to build the product behind it, it's one team,
          one point of contact.
        </p>

        <div className="about-panel">
          <div className="about-panel-visual">
            <img
              className="about-panel-image"
              src={teamPhoto}
              alt="The Solid5 team at their Harare office"
            />
          </div>
          <div className="about-panel-info">
            <p className="about-panel-label">SOLID5 AGENCY</p>
            <p>+263 78 307 262</p>
            <p>info@solid5.co.zw</p>
            <p>Harare, Zimbabwe</p>
          </div>
        </div>
      </div>
    </section>
  )
}