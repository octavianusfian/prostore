import type { NextConfig } from "next";
import path from "path";
import os from "os";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.watchOptions = {
      ignored: [
        "**/node_modules",
        "**/.next",
        path.resolve(os.homedir()), // ini menghindari akses ke direktori user
      ],
    };
    return config;
  },
};

export default nextConfig;
