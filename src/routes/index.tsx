import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harshita Joshi — Software Engineer & Data Engineering Intern" },
      {
        name: "description",
        content:
          "Portfolio of Harshita Joshi — Software Engineer, Data Engineering Intern at Celebal Technologies, AI/ML enthusiast and full-stack developer. 280+ DSA solved.",
      },
      { name: "author", content: "Harshita Joshi" },
      { property: "og:title", content: "Harshita Joshi — Software Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Final-year CSE student building full-stack, AI/ML, and data engineering projects. Open to graduate SDE and internship roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harshita Joshi — Software Engineer Portfolio" },
    ],
  }),
  component: Portfolio,
});
