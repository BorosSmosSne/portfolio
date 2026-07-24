"use client";

import { useMemo, useState } from "react";
import FadeIn from "./FadeIn";

type Category = "Apps & Backend" | "3D & Architecture" | "Video/Animation";

type Project = {
  title: string;
  category: Category;
  stack: string;
  description: string;
  /** Thumbnail in /public/images — swap these for real screenshots later. */
  image: string;
};

const FILTERS = [
  "All",
  "Apps & Backend",
  "3D & Architecture",
  "Video/Animation",
] as const;

type Filter = (typeof FILTERS)[number];

const PROJECTS: Project[] = [
  {
    title: "Full-Stack POS & To-Do Apps",
    category: "Apps & Backend",
    stack: "Flutter · Spring Boot · Laravel · Ubuntu",
    description:
      "Cross-platform mobile apps with secure REST APIs, deployed on self-managed Ubuntu servers.",
    image: "/images/project-pos.svg",
  },
  {
    title: "Enterprise Management Systems",
    category: "Apps & Backend",
    stack: "C# · Python · Node.js · MongoDB",
    description:
      "Internal business systems that streamline operations with reliable data pipelines and dashboards.",
    image: "/images/project-enterprise.svg",
  },
  {
    title: "Architectural Drafting & 3D",
    category: "3D & Architecture",
    stack: "AutoCAD · SketchUp · Blender",
    description:
      "Precise architectural drafting brought to life with detailed 3D models and photorealistic renders.",
    image: "/images/project-3d.svg",
  },
  {
    title: "Commercial Motion Graphics",
    category: "Video/Animation",
    stack: "After Effects · Adobe Animate",
    description:
      "Punchy motion graphics and animated brand pieces crafted for commercial campaigns.",
    image: "/images/project-motion.svg",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-content">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-4">Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Selected work.
          </h2>
          <p className="mt-4 text-lg text-muted">
            A cross-section of apps, systems, 3D and motion projects.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FILTERS.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                  isActive
                    ? "bg-accent text-white shadow-soft"
                    : "text-graphite hover:bg-accent-soft hover:text-accent-dark",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                {/* Thumbnail — replace files in /public/images with real shots */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-surface/80 px-3 py-1 text-xs font-medium text-graphite backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-charcoal">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-accent-dark">
                    {project.stack}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal opacity-0 transition-all duration-300 ease-smooth group-hover:opacity-100 md:-translate-y-1 md:group-hover:translate-y-0"
                  >
                    View Project
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M7 17L17 7M9 7h8v8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
