import FadeIn from "./FadeIn";

const CONTACT_ITEMS = [
  {
    label: "Location",
    value: "Phnom Penh",
    href: null as string | null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "088-517-2546",
    href: "tel:+8850885172546",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 014.5 5a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hengchhay2004@gmail.com",
    href: "mailto:hengchhay2004@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4 7l8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="section-padding bg-surface/60">
      <div className="container-content">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Have a project in mind or just want to say hello? I&apos;m always
            open to new opportunities.
          </p>

          <a
            href="mailto:hengchhay2004@gmail.com"
            className="btn btn-primary mt-8"
          >
            Say Hello
          </a>
        </FadeIn>

        {/* Contact details */}
        <FadeIn
          delay={120}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap"
        >
          {CONTACT_ITEMS.map((item) => {
            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  {item.icon}
                </span>
                <span className="text-left">
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-charcoal">
                    {item.value}
                  </span>
                </span>
              </>
            );

            const classes =
              "flex flex-1 items-center gap-3 rounded-card border border-line bg-surface px-5 py-4 shadow-soft transition-all duration-300 ease-smooth";

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className={`${classes} hover:-translate-y-0.5 hover:shadow-lift`}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className={classes}>
                {inner}
              </div>
            );
          })}
        </FadeIn>

        {/* Social + copyright */}
        <FadeIn
          delay={200}
          className="mt-14 flex flex-col items-center gap-6 border-t border-line pt-8 sm:flex-row sm:justify-between"
        >
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Heng Chhay. All rights reserved.
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-graphite transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-dark hover:shadow-soft"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 22 10.6 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9V9z" />
              </svg>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-graphite transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-dark hover:shadow-soft"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.34 9.34 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0022 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
