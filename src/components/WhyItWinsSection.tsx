import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Link as LinkIcon, Sparkles } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import video6 from "@/assets/videos/video-6.mp4";

const WhyItWinsSection = () => {
  const benefits = [
    {
      title: "Consistency at scale",
      description:
        "Never miss a cadence; weekly posts that follow SEO structure.",
      source: "Semrush",
    },
    {
      title: "Time & cost savings",
      description:
        "Automate repetitive content tasks and save resources for strategic work.",
      source: "ADA Global | AIContentfy",
    },
    {
      title: "People-first + search-ready",
      description:
        "Built to serve users first—clear answers, helpful formatting, and intent alignment.",
      source: "Google for Developers",
    },
    {
      title: "WordPress-native publishing",
      description:
        "Publish directly with titles, slugs, categories, tags, and featured images.",
      source: "WordPress Developer Resources",
    },
  ];

  return (
    <section
      aria-labelledby="why-it-wins-title"
      className="relative overflow-hidden"
    >
      <LazyVideo
        className="absolute inset-0 w-full h-full object-cover"
        src={video6}
        autoPlay
        muted
        playsInline
        loop
        eager
        preload="auto"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent"
      />
      {/* Subtle dotted background + gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 [background-image:radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-blue-500 to-purple-600" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-500 to-cyan-500" />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="why-it-wins-title"
            className="text-pretty text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            WHY IT WINS
          </h2>
          <p className="mt-4 text-balance text-sm text-white/70 md:text-base">
            Replace inconsistent content ops with a reliable, scalable, and
            search-ready pipeline.
          </p>
        </header>

        {/* Content: timeline + proof panel */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Timeline */}
          <div className="relative md:col-span-2">
            {/* Rail */}
            <div
              aria-hidden="true"
              className="absolute left-[22px] top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent md:block"
            />
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <li key={item.title}>
                  <Card className="group relative border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-start gap-4">
                        {/* Node */}
                        <div className="relative shrink-0">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/10">
                            <CheckCircle2 className="h-5 w-5 text-white/90" />
                          </span>
                          {/* Connector to the rail for md+ */}
                          <span
                            aria-hidden="true"
                            className="absolute -left-4 top-1/2 hidden h-[2px] w-4 -translate-y-1/2 bg-white/15 md:block"
                          />
                        </div>

                        {/* Copy */}
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-white md:text-xl">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
                            {item.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-white/10 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/15"
                            >
                              <LinkIcon className="mr-1 h-3.5 w-3.5" />
                              Source
                            </Badge>
                            <span className="truncate text-xs text-white/60">
                              {item.source}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    {/* Accent ring on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-inset ring-blue-400/20 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof & Pro Tip panel */}
          <aside className="space-y-6">
            {/* Proof points */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardContent className="p-6">
                <h4 className="text-sm font-semibold tracking-wide text-white/80">
                  Proof points
                </h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                    <p className="text-sm text-white/80">
                      Cadenced publishing correlates with stronger organic
                      visibility and crawl consistency.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
                    <p className="text-sm text-white/80">
                      Automations reduce production costs and speed up
                      time-to-publish without harming quality.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                    <p className="text-sm text-white/80">
                      People-first formatting aligns with helpful-content
                      expectations and reader satisfaction.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro Tip */}
            <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-md">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-6 rotate-12 rounded-full bg-gradient-to-tr from-purple-600/60 to-blue-500/60 blur-2xl"
              />
              <CardContent className="relative p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 px-3 py-1.5 text-xs font-semibold text-white shadow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Pro Tip
                </div>
                <p className="text-sm leading-relaxed text-white/90">
                  Use a hybrid approach—automation for volume SEO articles +
                  editors for thought-leadership and brand voice.{" "}
                  <span className="text-white/60">
                    It mirrors today’s “helpful content” standards.
                  </span>
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhyItWinsSection;
