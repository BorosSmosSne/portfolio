import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Soft ambient background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-soft/60 blur-3xl" />
        <div className="absolute right-[12%] top-1/3 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-content">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <FadeIn>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-graphite shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl md:text-7xl">
              Hi, I&apos;m Heng Chhay.
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-6 max-w-2xl text-pretty text-lg font-normal text-muted sm:text-xl">
              Full-Stack Mobile Developer&nbsp;&nbsp;|&nbsp;&nbsp;MIS
              Specialist&nbsp;&nbsp;|&nbsp;&nbsp;3D &amp; UI/UX Designer
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#portfolio"
                className="btn btn-primary group w-full sm:w-auto"
              >
                View My Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn btn-outline w-full sm:w-auto"
              >
                Download Resume
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
