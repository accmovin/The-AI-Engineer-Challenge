import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * In local development, proxy API requests to the FastAPI backend on port 8000.
   * On Vercel, /api/* is routed to api/index.py via vercel.json instead.
   */
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/chat",
          destination: "http://localhost:8000/api/chat",
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
