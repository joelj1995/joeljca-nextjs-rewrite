import AboutSection from "./about-section";
import Hero from "./hero";

export default function Home() {
  return (
    <>
      <Hero
        title1White="Expert .NET"
        title2Blue="Software Developer"
        subtitle="I help something hopefully..."
        tagline1="one"
        tagline2="two"
        tagline3="three"
        tagline4="four"
      />

      <AboutSection
        title="Full Stack Software Developer"
        aboutMe="I'm a Full Stack Software Developer, experienced with RESTful .NET APIs, CRM integrations, and Angular SPAs. As a freelancer, I specialize in helping clients integrate with Learning Management Systems."
      />
    </>
  )
}
