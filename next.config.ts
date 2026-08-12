import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
   sassOptions: {
    silenceDeprecations: [
      "import",
      "global-builtin",
      "color-functions",
      "mixed-decls",
    ],
  },
};

export default nextConfig;
