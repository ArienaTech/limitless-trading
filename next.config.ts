import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

// Every image is served from public/ on this origin, so no remote image hosts
// are allow-listed — adding one back would re-introduce a third-party
// dependency for assets that now live in the repo.
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
})(nextConfig);
