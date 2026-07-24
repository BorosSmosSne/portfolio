import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-content">
        <div className="mx-auto max-w-prose text-center">
          <FadeIn>
            <p className="eyebrow mb-4">About Me</p>
          </FadeIn>

          <FadeIn delay={80}>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Bridging engineering and design.
            </h2>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-graphite">
              I am a detail-oriented Full-Stack Mobile Developer with a strong
              foundation in Management Information Systems. I specialize in
              building responsive mobile applications backed by robust
              server-side architectures. My unique strength lies in bridging
              complex engineering with creative design&mdash;from architectural
              planning and 3D motion graphics to engineering Spring Boot
              backends, managing Ubuntu server deployments, and containerizing
              environments.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
