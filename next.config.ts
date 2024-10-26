import { paraglide } from "@inlang/paraglide-next/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
};

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./paraglide",
  },
  ...nextConfig,
});
