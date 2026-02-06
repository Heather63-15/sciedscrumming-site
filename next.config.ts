import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress URL redirects
      { source: "/contact-2", destination: "/contact", permanent: true },
      { source: "/sciedscrumming-privacy-policy", destination: "/privacy-policy", permanent: true },
      { source: "/sciedscrumming-terms-and-conditions-for-service", destination: "/terms-and-conditions", permanent: true },
      { source: "/skills-focused-tutoring-preparing-your-teen-for-their-most-confident-year", destination: "/skills-focused-tutoring", permanent: true },
      { source: "/udl-con-2024-1st-annual", destination: "/udl-con-2024", permanent: true },
      // Blog posts — redirect old top-level slugs to /musings/slug
      { source: "/edchange-global", destination: "/musings/edchange-global", permanent: true },
      { source: "/edchange-global-2021", destination: "/musings/edchange-global-2021", permanent: true },
      { source: "/empowering-students-a-quick-video", destination: "/musings/empowering-students-a-quick-video", permanent: true },
      { source: "/quantum-10-conference", destination: "/musings/quantum-10-conference", permanent: true },
      { source: "/2nd-agile-in-education-global-conference", destination: "/musings/2nd-agile-in-education-global-conference", permanent: true },
    ];
  },
};

export default nextConfig;
