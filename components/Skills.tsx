import FadeIn from "./FadeIn";

type SkillGroup = {
  title: string;
  caption: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    caption: "Interfaces people enjoy using.",
    skills: ["Flutter", "Dart", "HTML", "UI/UX Design", "Figma"],
  },
  {
    title: "Backend & Server",
    caption: "Robust, scalable server-side systems.",
    skills: [
      "Spring Boot",
      "Laravel",
      "Node.js",
      "Python",
      "C#",
      "C++",
      "Java",
      "Ubuntu Server Hosting",
      "MongoDB",
      "SQL Server",
      "Docker",
    ],
  },
  {
    title: "Design & Animation",
    caption: "3D, motion and visual storytelling.",
    skills: [
      "AutoCAD",
      "SketchUp",
      "Blender",
      "After Effects",
      "Adobe Animate",
      "Photoshop",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/60">
      <div className="container-content">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">Technical Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            A versatile, full-stack toolkit.
          </h2>
          <p className="mt-4 text-lg text-muted">
            From pixel-perfect interfaces to containerized backends and 3D
            motion graphics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <FadeIn key={group.title} delay={i * 120}>
              <div className="group h-full rounded-card border border-line bg-surface p-8 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{group.caption}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-graphite transition-colors duration-300 group-hover:border-accent/30"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
