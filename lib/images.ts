import { existsSync } from "node:fs";
import { join } from "node:path";
export function officeImage(number: number) {
  const extensions = [".jpeg", ".jpg", ".png", ".webp"];
  for (const ext of extensions) {
    const file = `/images/oficina-${String(number).padStart(2, "0")}${ext}`;
    if (existsSync(join(process.cwd(), "public", file))) {
      return {
        src: file,
        pending: false,
      };
    }
  }
  return {
    src: "/images/office-pending.svg",
    pending: true,
  };
}
export const hasLogo = () =>
  existsSync(join(process.cwd(), "public/images/logo-lexconterra.jpeg"));
