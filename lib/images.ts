import { existsSync } from "node:fs";
import { join } from "node:path";
export function officeImage(number: number) {
  const file = `/images/oficina-${String(number).padStart(2, "0")}.jpeg`;
  const present = existsSync(join(process.cwd(), "public", file));
  return {
    src: present ? file : "/images/office-pending.svg",
    pending: !present,
  };
}
export const hasLogo = () =>
  existsSync(join(process.cwd(), "public/images/logo-lexconterra.jpeg"));
