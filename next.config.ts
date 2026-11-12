import { networkInterfaces } from "node:os";
import type { NextConfig } from "next";

const localIps = Object.values(networkInterfaces())
  .flat()
  .filter((iface) => iface && !iface.internal && iface.family === "IPv4")
  .map((iface) => iface!.address);

const nextConfig: NextConfig = {
  // Permite cargar y ejecutar los scripts de hidratación al acceder desde dispositivos en la red local (LAN).
  allowedDevOrigins: [
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "*.local",
    ...localIps,
  ],
  // Todas las páginas se prerenderizan; no requieren APIs de caché experimentales.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
